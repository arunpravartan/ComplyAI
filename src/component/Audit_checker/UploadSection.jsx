import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Preloader from './Preloader'
import axios from 'axios';

const UploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [isPreloader, setisPreloader] = useState(false);
  const [message, setMessage] = useState("Uploading file...");
  const navigate = useNavigate();

  const url = "https://complyai.pravartan.com";

  const [auditData, setAuditData] = useState([])
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const validExtensions = ["doc", "docx"];
    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (validExtensions.includes(fileExtension)) {
        setSelectedFile(file);
        setError("");
      } else {
        setError("Please upload a valid .doc or .docx file.");
        setSelectedFile(null); 
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    if (!selectedFile) {
      alert("Please upload a doc file before submitting.");
      return;
    }
    
    setisPreloader(true);
    const formData = new FormData();
    formData.append("file", selectedFile);
  
    try {
      const response = await axios.post(url + "/docvalidation/send4audit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response?.status === 202) {
        const result = response?.data;
        if (result && result?.jobid) {

          const messages = [
            "Uploading file...",
            "Validating data...",
            "Processing data...",
            "Finalizing audit...",
          ];
  
          let currentMessageIndex = 0;
          const updateMessage = () => {
            if (currentMessageIndex < messages.length) {
              setMessage(messages[currentMessageIndex]);
              currentMessageIndex += 1;
              setTimeout(updateMessage, 10000);
            } else {
              fetchJobDetails(result?.jobid, selectedFile?.name);
            }
          };
  
          updateMessage(); 
        }
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  
  const fetchJobDetails = async (jobId, fileName) => {
    try {
      const jobIdResponse = await axios.get(`${url}/job/${jobId}`);
      if (jobIdResponse?.status === 200) {
        const jobIdResult = jobIdResponse?.data;
  
        if (jobIdResult && jobIdResult?.["audit-result"]?.length > 0) {
          const auditData = jobIdResult?.["audit-result"];
          setAuditData(auditData);
          navigate("/auditfindings", { state: { auditData, fileName: fileName } });
        }
  
        if (jobIdResult && jobIdResult?.Status === 500 && jobIdResult?.payload?.error) {
          alert(jobIdResult?.payload?.error);
        }
      }
    } catch (error) {
      console.error("Error fetching job details:", error);
    } finally {
      setisPreloader(false); // Stop preloader
    }
  };
  

  return (
    <section className="upload-section">
      <h2 className="upload-title">Validate Quality Procedure</h2>
      <hr className="divider" />
      {isPreloader && (<Preloader message={message} />)}
      <p className="upload-description">
        Upload the procedure to validate against Regulatory guidelines and Internal quality
        standards. Once you upload the document, the AI agent will audit it and list out all
        the compliance gaps as
      </p>
      <form onSubmit={handleSubmit}>
        <div className="file-input">
          <label htmlFor="fileUpload" className="file-label">
            {selectedFile ? selectedFile.name : "Select the document to upload (upload only docs file)"}
          </label>
          <input
            type="file"
            id="fileUpload"
            className="visually-hidden"
            accept=".doc, .docx"
            aria-label="Select the document to upload"
            onChange={handleFileChange}
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/089734f71bcbfdcb1fe9439a2ffecd3788d51641bc0f0b23e4b20f54a18deb8c?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065"
            alt="Upload icon"
            className="sidebar-item-icon"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default UploadSection;
