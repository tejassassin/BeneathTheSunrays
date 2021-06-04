import React, { useState } from "react";

import firebase from "firebase";
import { storage, db } from "../firebase";

export default function Adminpage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false)

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setUploading(true);

    storage
      .ref(`files/${file.name}`)
      .put(file)
      .then((snapshot) => {
        console.log(snapshot);

        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("myFiles").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: file.name,
              fileUrl: url,
              size: snapshot._delegate.bytesTransferred,
            });

            setUploading(false);
            setFile(null);
          });

        storage
          .ref("files")
          .child(file.name)
          .getMetadata()
          .then((meta) => {
            console.log(meta.size);
          });
      });
  };

  return (
    <div>
      <div>
        {uploading ? (
          <p>Uploading...</p>
        ) : (
          <>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
          </>
        )}
      </div>
    </div>
  );
}
