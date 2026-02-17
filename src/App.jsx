import { useState } from "react";

export default function App() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const API_URL = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  async function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
      author: author.trim(),
      title: title.trim(),
      body: body.trim(),
      public: isPublic,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("POST riuscita. Risposta API:", data);

      // reset form (facciamo pulito dopo l'invio)
      setAuthor("");
      setTitle("");
      setBody("");
      setIsPublic(true);
    } catch (err) {
      console.error("Errore POST:", err);
    }
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">📝 Post Form</h1>

      <form onSubmit={handleSubmit} className="card p-4 shadow">
        {/* AUTHOR */}
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Es. Giancarlo"
          />
        </div>

        {/* TITLE */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titolo del post"
          />
        </div>

        {/* BODY */}
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea
            className="form-control"
            rows="5"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Scrivi il contenuto..."
          />
        </div>

        {/* CHECKBOX */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
            id="publicCheck"
          />
          <label className="form-check-label" htmlFor="publicCheck">
            Post pubblico
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Crea Post
        </button>
      </form>
    </div>
  );
}
