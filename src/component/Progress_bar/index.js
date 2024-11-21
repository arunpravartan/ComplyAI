import React, { useState } from "react";

const ProgressBarComponent = () => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const startProgress = () => {
    setMessage("Uploading...");
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 10;
      if (currentProgress > 100) {
        clearInterval(interval);
        setMessage("Upload Complete!");
        return;
      }
      setProgress(currentProgress);
    }, 500); // Update every 500ms
  };

  return (
    <div style={{ width: "50%", margin: "20px auto", textAlign: "center" }}>
      <h3>{message}</h3>
      <div style={{ height: "30px", background: "#e0e0e0", borderRadius: "15px", overflow: "hidden" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: progress === 100 ? "green" : "#007bff",
            transition: "width 0.5s",
          }}
        ></div>
      </div>
      <p>{progress}%</p>
      <button
        onClick={startProgress}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Start Upload
      </button>
    </div>
  );
};

export default ProgressBarComponent;
