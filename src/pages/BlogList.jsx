import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="blog-list">
      <h2>All Blogs</h2>
      <div className="grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}