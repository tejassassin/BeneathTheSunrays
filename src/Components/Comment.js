import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useParams } from "react-router-dom";
import { storage, db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import numeral from "numeral";

import { useForm } from "react-hook-form";

export default function Comment({ post }) {
  const [liked, setLiked] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [repname, setRepName] = useState("");
  const [reply, setReply] = useState("");

  const [showrep, setShowrep] = useState(null);
  const [showrepform, setShowrepform] = useState(null);

  const ShowReplies = (i) => {
    if (showrep === i) {
      setShowrep(null);
    } else {
      setShowrep(i);
    }
  };

  const showReplyform = (i) => {
    if (showrepform === i) {
      setShowrepform(null);
    } else {
      setShowrepform(i);
    }
  };

  let { id } = useParams();

  const handleLike = () => {
    if (liked) {
      db.collection("posts")
        .doc(`${id}`)
        .update(
          {
            likes: post.likes - 1,
          },

          (err) => {
            if (err) {
              console.log(err);
            } else {
            }
          }
        );
    } else {
      // console.log(post);
      db.collection("posts")
        .doc(`${id}`)
        .update(
          {
            likes: post.likes + 1,
          },

          (err) => {
            if (err) {
              console.log(err);
            } else {
            }
          }
        );
    }
    setLiked(!liked);
  };

  // const CustomInput = (i) => {
  //   return (
  //     <input
  //       key={i + "19"}
  //       type="text"
  //       placeholder="Name..."
  //       defaultValue={repname}
  //       onChange={(e) => setRepName(e.target.value)}
  //       required
  //     />
  //   );
  // };

  // const ReplyForm = ({ cmt, i }) => {
  //   return (
  //     <form onSubmit={(e) => handleReply(e, cmt.cmtid)} key={i + "13"}>
  //       <div className="input-cont" key={i + "14"}>
  //         {/* <CustomInput i={i} key={i + "18"} /> */}
  //         <input
  //           key={i + "19"}
  //           type="text"
  //           placeholder="Name..."
  //           defaultValue={repname}
  //           onChange={(e) => setRepName(e.target.value)}
  //           required
  //         />
  //         <div key={i + "15"}>
  //           <button type="submit" key={i + "16"}>
  //             Add Reply
  //           </button>
  //         </div>
  //       </div>
  //       <textarea
  //         key={i + "17"}
  //         rows="2"
  //         placeholder="Reply..."
  //         value={reply}
  //         onChange={(e) => setReply(e.target.value)}
  //         required
  //       />
  //     </form>
  //   );
  // };

  // const Comment = ({ cmt, i }) => {
  //   return (
  //     <div className="cmt-cont" key={i + "1"}>
  //       <div className="cmt-name" key={i + "2"}>
  //         {cmt.name}
  //       </div>
  //       <div className="cmt" key={i + "3"}>
  //         {cmt.comment}
  //       </div>
  //       <div className="rep-cont" key={i + "4"}>
  //         <div
  //           className="reply-btn"
  //           onClick={() => showReplyform(i)}
  //           key={i + "5"}
  //         >
  //           {showrepform === i ? "Cancel" : "Reply"}
  //         </div>
  //         {cmt.replies.length !== 0 ? (
  //           <div
  //             className="view-reply"
  //             onClick={() => ShowReplies(i)}
  //             key={i + "6"}
  //           >
  //             {showrep === i ? "Hide Replies" : "View Replies"}
  //           </div>
  //         ) : (
  //           ""
  //         )}
  //       </div>

  //       {showrepform === i ? (
  //         <div key={i + "7"} className="reply-form">
  //           <div className="cmt-form" key={i + "8"}>
  //             {/* <ReplyForm cmt={cmt} i={i} key={i + "9"} /> */}

  //             <form onSubmit={(e) => handleReply(e, cmt.cmtid)} key={i + "13"}>
  //               <div className="input-cont" key={i + "14"}>
  //                 {/* <CustomInput i={i} key={i + "18"} /> */}
  //                 <input
  //                   key={i + "19"}
  //                   type="text"
  //                   placeholder="Name..."
  //                   defaultValue={repname}
  //                   onChange={(e) => setRepName(e.target.value)}
  //                   required
  //                 />
  //                 <div key={i + "15"}>
  //                   <button type="submit" key={i + "16"}>
  //                     Add Reply
  //                   </button>
  //                 </div>
  //               </div>
  //               <textarea
  //                 key={i + "17"}
  //                 rows="2"
  //                 placeholder="Reply..."
  //                 value={reply}
  //                 onChange={(e) => setReply(e.target.value)}
  //                 required
  //               />
  //             </form>
  //           </div>
  //         </div>
  //       ) : (
  //         ""
  //       )}
  //       {showrep === i ? (
  //         <div className="replies" key={i + "10"}>
  //           {cmt.replies.map((rep) => (
  //             <div key={rep.repid} className="reply">
  //               <div className="cmt-name" key={i + "11"}>
  //                 {rep.name}
  //               </div>
  //               <div className="cmt" key={i + "12"}>
  //                 {rep.reply}
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       ) : (
  //         ""
  //       )}
  //     </div>
  //   );
  // };

  const handleComment = (e) => {
    e.preventDefault();
    let cmts = post.comments;

    cmts.push({
      cmtid: uuidv4(),
      name: name,
      comment: comment,
      replies: [],
    });

    console.log(cmts);
    db.collection("posts").doc(`${id}`).update({
      comments: cmts,
    });
    setName("");
    setComment("");
  };

  const handleReply = (e, cmtid, i) => {
    e.preventDefault();
    let cmts = post.comments;
    console.log(repname);
    console.log(repname.trim());

    let newcmts = cmts.map((c) => {
      if (c.cmtid !== cmtid) {
        return c;
      } else if (repname.trim() !== "" && reply.trim() !== "") {
        c.replies.push({
          repid: uuidv4(),
          name: repname,
          reply: reply,
        });
        return c;
      }
    });

    console.log(newcmts);
    if (repname.trim() !== "" && reply.trim() !== "") {
      db.collection("posts").doc(`${id}`).update({
        comments: newcmts,
      });
      setRepName("");
      setReply("");
      setShowrep(i);
    }
  };
  return (
    <div className="cmt-section" >
      <div className="cmt-head">
        <div>Comments</div>
        <div className="like">
          {liked ? (
            <FavoriteIcon
              style={{ color: "red" }}
              className="like-icon"
              onClick={handleLike}
            />
          ) : (
            <FavoriteBorderIcon className="like-icon" onClick={handleLike} />
          )}
          <div>{post.likes.toLocaleString()} Likes</div>
        </div>
      </div>
      <div className="cmt-form">
        <form onSubmit={handleComment}>
          <div className="input-cont">
            <input
              type="text"
              placeholder="Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </div>
          <textarea
            rows="3"
            placeholder="Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </form>
      </div>
      <div className="cmts" key="unique">
        {post?.comments?.map((cmt, i) => {
          return (
            <div className="cmt-cont" key={i + "1"}>
              <div className="cmt-name" key={i + "2"}>
                {cmt.name}
              </div>
              <div className="cmt" key={i + "3"}>
                {cmt.comment}
              </div>
              <div className="rep-cont" key={i + "4"}>
                <div
                  className="reply-btn"
                  onClick={() => showReplyform(i)}
                  key={i + "5"}
                >
                  {showrepform === i ? "Cancel" : "Reply"}
                </div>
                {cmt.replies.length !== 0 ? (
                  <div
                    className="view-reply"
                    onClick={() => ShowReplies(i)}
                    key={i + "6"}
                  >
                    {showrep === i ? "Hide Replies" : "View Replies"}
                  </div>
                ) : (
                  ""
                )}
              </div>

              {showrepform === i ? (
                <div key={i + "7"} className="reply-form">
                  <div className="cmt-form" key={i + "8"}>
                    {/* <ReplyForm cmt={cmt} i={i} key={i + "9"} /> */}

                    <form
                      onSubmit={(e) => handleReply(e, cmt.cmtid, i)}
                      key={i + "13"}
                    >
                      <div className="input-cont" key={i + "14"}>
                        {/* <CustomInput i={i} key={i + "18"} /> */}
                        <input
                          key={i + "19"}
                          type="text"
                          placeholder="Name..."
                          value={repname}
                          onChange={(e) => setRepName(e.target.value)}
                          required
                        />
                        <div key={i + "15"}>
                          <button type="submit" key={i + "16"}>
                            Add Reply
                          </button>
                        </div>
                      </div>
                      <textarea
                        key={i + "17"}
                        rows="2"
                        placeholder="Reply..."
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        required
                      />
                    </form>
                  </div>
                </div>
              ) : (
                ""
              )}
              {showrep === i ? (
                <div className="replies" key={i + "10"}>
                  {cmt.replies.map((rep) => (
                    <div key={rep.repid} className="reply">
                      <div className="cmt-name" key={i + "11"}>
                        {rep.name}
                      </div>
                      <div className="cmt" key={i + "12"}>
                        {rep.reply}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
