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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
  const handleReplyCancel = () => {
    setShowrepform(false);
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

  const Comment = ({ cmt, i }) => {
    return (
      <div className="cmt-cont" key={"z" + i}>
        <div className="cmt-name">{cmt.name}</div>
        <div className="cmt">{cmt.comment}</div>
        <div className="rep-cont">
          <div className="reply-btn" onClick={() => showReplyform(i)}>
            {showrepform === i ? "Cancel" : "Reply"}
          </div>
          {cmt.replies.length !== 0 ? (
            <div className="view-reply" onClick={() => ShowReplies(i)}>
              {showrep === i ? "Hide Replies" : "View Replies"}
            </div>
          ) : (
            ""
          )}
        </div>

        {showrepform === i ? (
          <div key={i + "a"} className="reply-form">
            <div className="cmt-form" key={"b" + i}>
              <form key={"c" + i} onSubmit={(e) => handleReply(e, cmt.cmtid)}>
                <div className="input-cont" key={"d" + i}>
                  <input
                    key={"e" + i}
                    type="text"
                    placeholder="Name..."
                    value={repname}
                    onChange={(e) => setRepName(e.target.value)}
                    required
                  />
                  <div>
                    <button type="submit">Add Reply</button>
                  </div>
                </div>
                <textarea
                  rows="2"
                  placeholder="Reply..."
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  required
                />
              </form>
              {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-cont" key={"d" + i}>
                  <input
                    {...register("exampleRequired", { required: true })}
                    placeholder="Name..."
                    value={repname}
                    onChange={(e) => setRepName(e.target.value)}
                  />
                  <div>
                    <button type="submit">Add Reply</button>
                  </div>
                </div>
                <textarea {...register("example")} placeholder="reply..." />

                {errors.exampleRequired && <span>This field is required</span>}
              </form> */}
            </div>
          </div>
        ) : (
          ""
        )}
        {showrep === i ? (
          <div className="replies">
            {cmt.replies.map((rep) => (
              <div key={rep.repid} className="reply">
                <div className="cmt-name">{rep.name}</div>
                <div className="cmt">{rep.reply}</div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };

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

  const handleReply = (e, cmtid) => {
    e.preventDefault();
    let cmts = post.comments;

    let newcmts = cmts.map((c) => {
      if (c.cmtid !== cmtid) {
        return c;
      } else {
        c.replies.push({
          repid: uuidv4(),
          name: repname,
          reply: reply,
        });
        return c;
      }
    });

    console.log(newcmts);
    db.collection("posts").doc(`${id}`).update({
      comments: newcmts,
    });
    setRepName("");
    setReply("");
  };
  return (
    <div className="cmt-section">
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
      <div className="cmts">
        {post?.comments?.map((cmt, i) => {
          return <Comment cmt={cmt} key={cmt.cmtid} i={cmt.cmtid} />;
        })}
      </div>
    </div>
  );
}
