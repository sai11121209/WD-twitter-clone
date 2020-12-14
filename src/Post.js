import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar, Button } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import db from "./firebase";

const favoritPlus = (e, id, favoritCount) => {
  e.preventDefault();
  db.collection('posts').doc(id).update({ favoritCount: favoritCount += 1 })
};

const Post = forwardRef(
  ({ id, displayName, username, verified, favoritCount, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            {/* <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" /> */}
            <Button
              onClick={(e) => favoritPlus(e, id, favoritCount)}
              type="submit"
            >
              {favoritCount}<FavoriteBorderIcon fontSize="small" />
            </Button>
            {/* <PublishIcon fontSize="small" /> */}
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
