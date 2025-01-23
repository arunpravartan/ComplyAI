import React from 'react';

const UploadSection = () => {
  return (
    <section className="upload-section">
      <h2 className="upload-title">Validate Quality Procedure</h2>
      <divider className="divider" />
      <p className="upload-description">
        Upload the procedure to validate against Regulatory guidelines and Internal quality
        standards.<br></br> Once you upload the document, the AI agent will audit it and list out all
        the compliance gaps as
      </p>
      <form>
        <div className="file-input">
          <label htmlFor="fileUpload" className="visually-hidden">Select the document to upload</label>
          <input type="file" id="fileUpload" aria-label="Select the document to upload" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/089734f71bcbfdcb1fe9439a2ffecd3788d51641bc0f0b23e4b20f54a18deb8c?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="Upload icon" className="sidebar-item-icon" />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default UploadSection;