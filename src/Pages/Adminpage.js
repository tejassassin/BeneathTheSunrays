import React, { useEffect, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { storage, db } from "../firebase";

export default function Adminpage() {
  const [homeimgs, setHomeimgs] = useState([]);
  const [homeimg, setHomeimg] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("homeimgs").onSnapshot((snapshot) =>
      setHomeimgs(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const deleteHomeimg = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      db.collection("homeimgs")
        .doc(`${id}`)
        .delete((err) => {
          if (err) {
            console.log(err);
          } else {
            setCurrId("");
          }
        });
    }
  };

  const changeHomeimg = (e) => {
    if (e.target.files[0]) {
      setHomeimg(e.target.files[0]);
    }
  };

  const handleHomeimg = (e) => {
    e.preventDefault();

    setUploading(true);

    storage
      .ref(`myhomeimgs/${homeimg.name}`)
      .put(homeimg)
      .then((snapshot) => {
        storage
          .ref("myhomeimgs")
          .child(homeimg.name)
          .getDownloadURL()
          .then((imgurl) => {
            setThumb(null);
            db.collection("homeimgs").add({
              size: snapshot._delegate.bytesTransferred,
              imgname: homeimg.name,
              imgUrl: imgurl,
            });
          });
      });

    setVidTitle("");
  };

  ///////////////////////posts

  const [posts, setPosts] = useState([]);
  const [currId, setCurrId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState(null);
  const [blogcont, setBlogcont] = useState("");

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (currId === "") {
      setTitle("");
      setDate("");
      setBlogcont("");
      setImg(null);
      setSelCategories([]);
    } else {
      const post = posts.find((x) => x.id === currId);

      setTitle(post.data.title);
      setDate(post.data.date);
      setBlogcont(post.data.desc);
      setImg(post.data.imgname);
      setSelCategories(post.data.categories);
    }
  }, [currId, posts]);

  const handlePost = (e) => {
    e.preventDefault();

    if (currId === "") {
      storage
        .ref(`mypics/${img.name}`)
        .put(img)
        .then((snapshot) => {
          storage
            .ref("mypics")
            .child(img.name)
            .getDownloadURL()
            .then((imgurl) => {
              setImg(null);

              db.collection("posts").add(
                {
                  title: title,
                  date: date,
                  desc: blogcont,
                  categories: Selcategories,
                  likes: 0,
                  comments: [],
                  imgurl: imgurl,
                  imgname: img.name,
                },
                (err) => {
                  if (err) {
                    console.log(err);
                  } else {
                    setCurrId("");
                  }
                }
              );
            });
        });
    } else {
      console.log(img);
      storage
        .ref(`mypics/${img.name}`)
        .put(img)
        .then((snapshot) => {
          storage
            .ref("mypics")
            .child(img.name)
            .getDownloadURL()
            .then((imgurl) => {
              setImg(null);

              db.collection("posts")
                .doc(`${currId}`)
                .update(
                  {
                    title: title,
                    date: date,
                    desc: blogcont,
                    categories: Selcategories,
                    imgurl: imgurl,
                    imgname: img.name,
                  },
                  (err) => {
                    if (err) {
                      console.log(err);
                    } else {
                      setCurrId("");
                    }
                  }
                );
            });
        });
    }

    setTitle("");
    setDate("");
    setBlogcont("");
    setImg(null);
    setCurrId("");
    setSelCategories([]);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };
  const newpost = (e) => {
    setTitle("");
    setDate("");
    setBlogcont("");
    setImg(null);
    setCurrId("");
    setSelCategories([]);
  };

  const Delete = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      db.collection("posts")
        .doc(`${id}`)
        .delete((err) => {
          if (err) {
            console.log(err);
          } else {
            setCurrId("");
          }
        });
    }
  };

  ///////////////////////////////categories

  const [categories, setCategories] = useState([]);
  const [Selcategories, setSelCategories] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("categories").onSnapshot((snapshot) =>
      setCategories(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const deleteCat = (cat) => {
    let newcats;
    newcats = Selcategories.filter((c) => c !== cat);
    setSelCategories(newcats);
  };

  const selectCat = (cat) => {
    let newcats = [...Selcategories];
    const found = newcats.find((element) => element === cat);
    if (!found) {
      newcats.push(cat);
    }
    // console.log(cat);

    console.log(newcats);
    setSelCategories(newcats);
  };

  //////////////////////////////////////////
  //////Readers/////

  const [readers, setReaders] = useState([]);
  const [reader, setReader] = useState("");

  useEffect(() => {
    const unsubscribe = db.collection("readers").onSnapshot((snapshot) =>
      setReaders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);
  const deleteReader = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      db.collection("readers")
        .doc(`${id}`)
        .delete((err) => {
          if (err) {
            console.log(err);
          } else {
            setCurrId("");
          }
        });
    }
  };

  const changeReader = (e) => {
    if (e.target.files[0]) {
      setReader(e.target.files[0]);
    }
  };

  const handleReader = (e) => {
    e.preventDefault();

    setUploading(true);

    storage
      .ref(`myreaders/${reader.name}`)
      .put(reader)
      .then((snapshot) => {
        storage
          .ref("myreaders")
          .child(reader.name)
          .getDownloadURL()
          .then((imgurl) => {
            setThumb(null);
            db.collection("readers").add({
              size: snapshot._delegate.bytesTransferred,
              imgname: reader.name,
              imgUrl: imgurl,
            });
          });
      });

    setVidTitle("");
  };
  //////////////////////////////////////////
  const [vids, setVids] = useState([]);
  const [thumb, setThumb] = useState(null);
  const [vid, setVid] = useState("");
  const [vidTitle, setVidTitle] = useState("");

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const unsubscribe = db.collection("videos").onSnapshot((snapshot) =>
      setVids(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const thumbnail = (e) => {
    if (e.target.files[0]) {
      setThumb(e.target.files[0]);
    }
  };
  const video = (e) => {
    if (e.target.files[0]) {
      setVid(e.target.files[0]);
    }
  };

  const vidDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      db.collection("videos")
        .doc(`${id}`)
        .delete((err) => {
          if (err) {
            console.log(err);
          } else {
            setCurrId("");
          }
        });
    }
  };

  const handleVideo = (e) => {
    e.preventDefault();

    setUploading(true);

    storage
      .ref(`myvideos/thumbnail/${thumb.name}`)
      .put(thumb)
      .then((snapshot) => {
        storage
          .ref("myvideos/thumbnail")
          .child(thumb.name)
          .getDownloadURL()
          .then((imgurl) => {
            setThumb(null);
            storage
              .ref(`myvideos/vid/${vid.name}`)
              .put(vid)
              .then((snapshot) => {
                storage
                  .ref("myvideos/vid")
                  .child(vid.name)
                  .getDownloadURL()
                  .then((url) => {
                    db.collection("videos").add({
                      vidname: vidTitle,
                      fileUrl: url,
                      size: snapshot._delegate.bytesTransferred,
                      imageName: thumb.name,
                      imgUrl: imgurl,
                    });
                    setVid(null);
                  });
              });
          });
      });

    setVidTitle("");
  };

  return (
    <div>
      {/* <div>
        {uploading ? (
          <p>Uploading...</p>
        ) : (
          <>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
          </>
        )}
      </div> */}

      <div className="adm-posts">
        <h1>Home images</h1>
        {homeimgs.map((img) => (
          <div key={img.id} className="adm-post">
            {img.data.imgname}
            <DeleteIcon
              className="icon"
              onClick={() => deleteHomeimg(img.id)}
            />
          </div>
        ))}
      </div>

      <div className="vid-form-cont">
        <form onSubmit={handleHomeimg}>
          <br />
          <input
            style={{
              width: "max-content",
              backgroundColor: "#f8de7e",
              cursor: "pointer",
            }}
            type="file"
            onChange={changeHomeimg}
            placeholder="img"
            required
          />

          <br />
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>

      <div className="adm-posts">
        <h1>My Posts</h1>
        {posts.map((post) => (
          <div key={post.id} className="adm-post">
            {post.data.title}
            <div className="icn-hol">
              <EditIcon
                className="icon"
                onClick={() => {
                  setCurrId(post.id);
                }}
              />
              <DeleteIcon className="icon" onClick={() => Delete(post.id)} />
            </div>
          </div>
        ))}
      </div>

      <div className="post-form-cont">
        <div className="post-form">
          <h2>Add New Post</h2>
          <div className="new-btn" onClick={newpost}>
            New post
          </div>
          <form onSubmit={handlePost}>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title of post..."
              required
            />
            <br />
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="text"
              placeholder="Publish date..."
              required
            />
            <br />
            <div>
              <h3>Available categories</h3>
              <br />
              {categories[0]?.data?.categories?.map((cat) => (
                <div className="cat-item" onClick={() => selectCat(cat)}>
                  {cat["name"]}
                </div>
              ))}
            </div>
            <br />
            <div>
              <h3>Selected categories</h3>
              <br />

              {Selcategories.map((cat, i) => (
                <div className="cat-item" key={i}>
                  <div>{cat["name"]}</div>
                  <div
                    onClick={() => deleteCat(cat)}
                    style={{ marginLeft: "1em" }}
                  >
                    X
                  </div>
                </div>
              ))}
            </div>
            <br />
            {currId && (
              <p style={{color:"red", fontWeight:"700"}}>
                Dont forget to delete this picture from storage in the firebase
                console !!!
              </p>
            )}
            Image :
            <input
              style={{
                width: "max-content",
                backgroundColor: "#f8de7e",
                cursor: "pointer",
              }}
              type="file"
              onChange={handleChange}
              required
            />
            
            <textarea
              name=""
              id=""
              cols="30"
              rows="20"
              placeholder="Blog content..."
              value={blogcont}
              onChange={(e) => setBlogcont(e.target.value)}
              required
            ></textarea>
            <button type="submit">{currId === "" ? "Submit" : "Update"}</button>
          </form>
        </div>
      </div>
      <br />
      <hr />

      <div className="adm-posts">
        <h1>Readers Section</h1>
        {readers.map((reader) => (
          <div key={reader.id} className="adm-post">
            {reader.data.imgname}
            <DeleteIcon
              className="icon"
              onClick={() => deleteReader(reader.id)}
            />
          </div>
        ))}
      </div>
      <div className="vid-form-cont">
        <form onSubmit={handleReader}>
          <br />
          <input
            style={{
              width: "max-content",
              backgroundColor: "#f8de7e",
              cursor: "pointer",
            }}
            type="file"
            onChange={changeReader}
            placeholder="img"
            required
          />

          <br />
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>

      <br />
      <hr />

      <div className="adm-posts">
        <h1>My videos</h1>
        {vids.map((vid) => (
          <div key={vid.id} className="adm-post">
            {vid.data.vidname}
            <DeleteIcon className="icon" onClick={() => vidDelete(vid.id)} />
          </div>
        ))}
      </div>
      <div className="vid-form-cont">
        <form onSubmit={handleVideo}>
          <h2>Add New Video</h2>
          <input
            value={vidTitle}
            onChange={(e) => setVidTitle(e.target.value)}
            type="text"
            placeholder="Title of video..."
            required
          />
          <br />
          Video Thumbnail :
          <br />
          <input
            style={{
              width: "max-content",
              backgroundColor: "#f8de7e",
              cursor: "pointer",
            }}
            type="file"
            onChange={thumbnail}
            placeholder="img"
            required
          />
          <br />
          Video :
          <br />
          <input
            style={{
              width: "max-content",
              backgroundColor: "#f8de7e",
              cursor: "pointer",
            }}
            type="file"
            onChange={video}
            placeholder="video"
            required
          />
          <br />
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    </div>
  );
}
