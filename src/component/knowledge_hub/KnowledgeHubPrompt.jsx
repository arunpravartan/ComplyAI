import { useState, useRef } from 'react';
import '../Recommended_action/auditStyle.css';
import { useNavigate } from 'react-router-dom';
import styles from '../Login/EmailInput.module.css';
import KnowledgeHubQuery from './KnowledgeHubQuery';
import axios from 'axios';
const KnowledgeHubPrompt = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null); // Create a ref for the input
  const [result, setResult] = useState('');
  const [serchText, setSearchText] = useState('');
  const url = "https://localhost:1892/upload";

  const sidebarIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6df618ae8636df5739c65c0445c8a8045fd46b2191a0e0cf7d0ba0bd2ec097b1?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Main icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea86de254a516581c29aaa6480ff5a1b67b50de5504ce9cfcf22bcd493309d46?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Secondary icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/50f5e57bdf731d9140757d5df0b007ac35099620123ac78fbdb5d15ae92ef2af?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Secondary icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1fcd4dfc5088fb9137eda7bfc6836676f185c9f05e8ea058d16967928bc1354?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Secondary icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/71be55d492abad250f8caef2fcd3cf130d1acfe21ebf8314b34d4078f5f462a7?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Secondary icon 4" },
  ];


  const handleIconClick = (index) => {
    if (index === 0) {
      navigate(-1);
    }
    if (index === 1) {
      navigate('/dashboard');
    }
    if (index === 2) {
      window.location.reload();
    }
  }

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Prevent form submission
  //   if (!email.trim()) {
  //     alert('Please enter your query before submitting.');
  //   } else {
  //     navigate('/KnowledgeHubQuery');
  //   }
    
  // };

  // const handleInputChange = (event) => {
  //   setSearchText(event.target.value);
  // };

  const handleSubmit = async(event) => {
    event.preventDefault(); // Prevent form submission
    if (!serchText.trim()) {
      alert('Please enter your query before submitting.');
    } else {
      // const jobIdResponse = await axios.get(`${url}/jobId/${result?.jobId}`);
      // if (jobIdResponse.ok) {
      //   const jobIdResult = await jobIdResponse.json();
      //   if (jobIdResult && jobIdResult?.status === 200 && jobIdResult?.payload?.auditlog.length > 0) {
      //     const auditlogData = jobIdResult?.payload?.auditlog;
      //     setResult(auditlogData);
      //     navigate("/auditfindings", { state: { auditlogData } });
      //   }
      //   if (jobIdResult && jobIdResult?.status === 500 && jobIdResult?.payload?.error) {
      //     alert(jobIdResult?.payload?.error);
      //   }
      // }
      setResult("Here is the SOP for Handling Contamination Events (Incident Management)Here is the SOP for Handling Contamination Events (Incident Management)Here is the SOP for Handling Contamination Events (Incident Management)Here is the SOP for Handling Contamination Events (Incident Management)Here is the SOP for Handling Contamination Events (Incident Management)Here is the SOP for Handling Contamination Events (Incident Management)Here is the SOP for Handling Contamination Events (Incident Management)Here is the SOP for Handling Contamination Events (Incident Management)");
    }

  };

  const handleRewriteClick = () => {
    setSearchText(''); // Clear the textbox
    inputRef.current.focus(); // Focus on the textbox
  };

  return (
    <main className="audit-container">
      <aside className="sidebar-audit">
        {sidebarIcons.map((icon, index) => (
          <div key={index} className="icon-wrapper" style={{ 'marginTop': icon.alt === "Secondary icon 3" ? "400px" : "0px" }}>
            <img src={icon.src} alt={icon.alt} className="icon" onClick={() => handleIconClick(index)} />
          </div>
        ))}
      </aside>
      <section className="main-content-audit" style={{ height: "600px", display: "flex", flexDirection: "column" }}>
        <div className="content-wrapper-audit" style={{ flex: "1" }}>
          <h1 className="title-audit">Ask queries from knowledge base</h1>
          <hr className="divider" />
          {result && (
          <KnowledgeHubQuery findings={result} reWrite={handleRewriteClick} />
          )}
        </div>
        <div className={styles.inputWrapper} style={{ marginTop: "auto", padding: "10px" }}>
          <input
            type="email"
            ref={inputRef}
            id="email"
            className={styles.email}
            placeholder="Type your queries related to internal procedures, external guidelines, or other queries"
            value={serchText}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="download-print-buttons" style={{ padding: "10px", "marginLeft": "350px" }}>
          <button type="submit" onClick={handleSubmit} className="action-button-Submit">
            Submit
          </button>
        </div>
      </section>

    </main>
  );
};

export default KnowledgeHubPrompt;