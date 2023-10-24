import axios from "axios";
import React, { useEffect, useState } from "react";

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/posts");

      setPosts(response.data.posts);
    } catch (error) {}
  };

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <p>id: {post.id}</p>
          <p>title: {post.title}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsPage;
