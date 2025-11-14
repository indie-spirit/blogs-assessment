import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="blog-details">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}