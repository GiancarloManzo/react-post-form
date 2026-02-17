import { useState } from "react";

export default function App() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      <h1>Post Form</h1>
    </div>
  );
}
