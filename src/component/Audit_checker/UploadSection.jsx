import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBarComponent from '../Progress_bar';
import axios from 'axios';
 
const UploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState("");
  const navigate = useNavigate();

  const url = "https://localhost:1892/upload";

  const [auditData, setAuditData] = useState([
  "Stop production immediately for the affected batch to prevent further deviations. Isolate the batch in quarantine for further investigation. Alert the QC team to conduct an immediate investigation into contamination risks and deviations in key parameters (pH, temperature, DO). Perform a risk assessment to determine the extent of deviation and the potential impact on product quality.",
  "Test pH probes: Ensure that the pH sensors are properly calibrated. Check acid/base addition systems: Inspect the automated pH adjustment system for malfunctions. Immediate correction: Add the required acid or base to bring the pH back into the optimal range.",
  "Review oxygenation system: Check for any issues with the oxygen sparging system or air filters. Sensor calibration: Verify that the DO probes are accurate and functioning correctly. Agitation check: Ensure that agitation is sufficient to distribute oxygen evenly in the culture.",
  
])
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
        setSelectedFile(null); // Clear the file if invalid
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh
    if (!selectedFile) {
      alert("Please upload a doc file before submitting.");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    navigate("/auditfindings", { state: { auditData, fileName : selectedFile?.name } });
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        },
      });
      if (response.ok) {
        const result = await response.json();
        if (result && result?.status === 200) {
          const jobIdResponse = await axios.get(`${url}/jobId/${result?.jobId}`);
          if (jobIdResponse.ok) {
            const jobIdResult = await jobIdResponse.json();
            if (jobIdResult && jobIdResult?.status === 200 && jobIdResult?.payload?.auditlog.length > 0) {
              const auditlogData = jobIdResult?.payload?.auditlog;
              setAuditData(auditlogData);
              navigate("/auditfindings", { state: { auditlogData } });
            }
            if (jobIdResult && jobIdResult?.status === 500 && jobIdResult?.payload?.error) {
              alert(jobIdResult?.payload?.error);
            }
          }
        }
        if (result && result?.status === 406) {
          alert(result?.reason);
        }
        if (result && result?.status === 500) {
          alert(result?.reason);
        }
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <section className="upload-section">
      <h2 className="upload-title">Validate Quality Procedure</h2>
      <hr className="divider" />
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
