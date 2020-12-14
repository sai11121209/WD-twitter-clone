import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            id={post.id}
            displayName={post.data().displayName}
            username={post.data().username}
            verified={post.data().verified}
            favoritCount={post.data().favoritCount}
            text={post.data().text}
            avatar={post.data().avatar}
            image={post.data().image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
