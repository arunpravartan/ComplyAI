import React, { useState } from "react";
import "./KnowledgeHubPrompt.css";
import Sidebar from './Sidebar';

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async () => {
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }

    setError("");
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/knowledgehub/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response from server");
      }

      const data = await res.json();
      setResponse(data.response || "No response available");
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="chatbot-container">
        <Sidebar />
        <h1>Knowledge agent</h1>
        <div className="chatbot-input-section">
          <input
            type="text"
            value={question}
            onChange={handleInputChange}
            placeholder="Ask anything about regulatory compliance and internal policies"
            className="chatbot-input"
          />
          <button onClick={handleSubmit} className="chatbot-submit">
            Submit
          </button>
        </div>
        {loading && <p className="chatbot-loading">Finding the answers...</p>}
        {response && <div className="chatbot-response">{response}</div>}
        {error && <div className="chatbot-error">{error}</div>}
      </div>
   </main>
  );
};

export default KnowledgeHubPrompt;
