import React from 'react';
import { useNavigate } from 'react-router-dom';

const UploadSection = () => {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/auditfindings');
  }
  return (
    <section className="upload-section">
      <h2 className="upload-title">Validate Quality Procedure</h2>
      <hr className="divider" />
      <p className="upload-description">
        Upload the procedure to validate against Regulatory guidelines and Internal quality
        standards. Once you upload the document, the AI agent will audit it and list out all
        the compliance gaps as
      </p>
      <form>
        <div className="file-input">
          <label htmlFor="fileUpload" className="file-label">
            Select the document to upload (upload only docs file)
          </label>
          <input type="file" id="fileUpload" className="visually-hidden" aria-label="Select the document to upload" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/089734f71bcbfdcb1fe9439a2ffecd3788d51641bc0f0b23e4b20f54a18deb8c?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="Upload icon" className="sidebar-item-icon" />
        </div>
      </form>
      <button type="submit" className="submit-button" onClick={() => {handleSubmit()}}>Submit</button>
    </section>
  );
};

export default UploadSection;