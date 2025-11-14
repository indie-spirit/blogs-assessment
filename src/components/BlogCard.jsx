import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}...</p>
      <Link to={`/blog/${post.id}`} className="read-more">
        Read More
      </Link>
    </div>
  );
}