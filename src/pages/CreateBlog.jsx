import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customBlogs } from "../data";

export default function CreateBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || body.length < 20) {
      return setError("Title required & Body must be 20+ chars");
    }

    customBlogs.push({
      id: Date.now(),
      title,
      body,
    });

    navigate("/");
  };

  return (
    <div className="create-blog">
      <h2>Create Blog</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write blog content..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}