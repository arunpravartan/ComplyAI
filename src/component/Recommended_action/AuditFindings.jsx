import React from 'react';
import './auditStyle.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const AuditFindings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const findings = location.state?.auditData;
  const fileName = location.state?.fileName;
  const sidebarIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6df618ae8636df5739c65c0445c8a8045fd46b2191a0e0cf7d0ba0bd2ec097b1?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Main icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea86de254a516581c29aaa6480ff5a1b67b50de5504ce9cfcf22bcd493309d46?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Secondary icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/50f5e57bdf731d9140757d5df0b007ac35099620123ac78fbdb5d15ae92ef2af?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Secondary icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1fcd4dfc5088fb9137eda7bfc6836676f185c9f05e8ea058d16967928bc1354?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Secondary icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/71be55d492abad250f8caef2fcd3cf130d1acfe21ebf8314b34d4078f5f462a7?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Secondary icon 4" },
  ];

  // const findings = [
  //   {
  //     title: "Finding 1",
  //     content: "Stop production immediately for the affected batch to prevent further deviations. Isolate the batch in quarantine for further investigation. Alert the QC team to conduct an immediate investigation into contamination risks and deviations in key parameters (pH, temperature, DO). Perform a risk assessment to determine the extent of deviation and the potential impact on product quality."
  //   },
  //   {
  //     title: "Finding 2",
  //     content: "Test pH probes: Ensure that the pH sensors are properly calibrated. Check acid/base addition systems: Inspect the automated pH adjustment system for malfunctions. Immediate correction: Add the required acid or base to bring the pH back into the optimal range.",
  //     mitigatingActions: "Rebalance pH as needed and monitor its impact on culture growth. If pH was outside the acceptable range for a prolonged period, the batch may need to be discarded."
  //   },
  //   {
  //     title: "Finding 3",
  //     content: "Review oxygenation system: Check for any issues with the oxygen sparging system or air filters. Sensor calibration: Verify that the DO probes are accurate and functioning correctly. Agitation check: Ensure that agitation is sufficient to distribute oxygen evenly in the culture.",
  //     mitigatingActions: "Adjust airflow or agitation to restore optimal DO levels. If prolonged deviation occurred, assess whether the cells are viable."
  //   }
  // ];

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

  const handleCopyClick = () => {
    const textToCopy = document.querySelector('.findings-text').textContent;
    navigator.clipboard.writeText(textToCopy);
    alert("Copied to clipboard");
  }

  const handleShareClick = () => {
    const textToShare = document.querySelector('.findings-text')?.textContent || '';

    // Encode text for fallback sharing
    const encodedText = encodeURIComponent(textToShare);

    // Check if the Share API is available
    if (navigator.share) {
      navigator
        .share({
          title: 'Findings to Share',
          text: textToShare,
        })
        .catch((error) => console.error('Sharing failed', error));
    } else {
      // Fallback for platforms without Share API
      const emailLink = `mailto:?subject=Findings to Share&body=${encodedText}`;
      const whatsappLink = `https://wa.me/?text=${encodedText}`;

      // Display fallback share links
      const shareMenu = document.createElement('div');
      shareMenu.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000; background: white; padding: 20px; border: 1px solid #ccc; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 8px;">
          <p>Share this content:</p>
          <a href="${emailLink}" target="_blank" style="margin-right: 10px;">Share via Email</a>
          <a href="${whatsappLink}" target="_blank">Share via WhatsApp</a>
          <button style="margin-top: 10px;" onclick="document.body.removeChild(this.parentElement)">Close</button>
        </div>
      `;
      document.body.appendChild(shareMenu);
    }
  };

  const handleDownloadClick = () => {
    const textToDownload = document.querySelector('.findings-text').textContent;
    const blob = new Blob([textToDownload], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'findings.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePrintClick = () => {
    const textToDownload = document.querySelector('.findings-text').textContent;
    window.print(textToDownload);
  }
  return (
    <main className="audit-container">
      <aside className="sidebar-audit">
        {sidebarIcons.map((icon, index) => (
          <div key={index} className="icon-wrapper" style={{ 'marginTop': icon.alt === "Secondary icon 3" ? "480px" : "0px" }}>
            <img src={icon.src} alt={icon.alt} className="icon" onClick={() => handleIconClick(index)} />
          </div>
        ))}
      </aside>
      <section className="main-content-audit">
        <div className="content-wrapper-audit">
          <h1 className="title-audit">Findings of Audit Checker</h1>
          <hr className="divider" />
          <div className="findings-container" style={{ "marginLeft": "75px", height:'450px' }}>
            <h2 className="visually-hidden-audit">Audit Findings</h2>
            <p className="findings-text" style={{ height: '370px', overflow: 'scroll', overflowX: 'hidden', fontSize: '20px', fontStyle:'italic' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <strong>Document Name: {fileName}</strong>
                <strong style={{marginRight : '20px'}}>Date: {new Date().toLocaleDateString()}</strong>
              </div>
              {findings.map((finding, index) => (
                <div key={index} style={{ marginTop: '15px' }}>
                  <strong> {index + 1}.</strong> Finding {index + 1} :<br/> {finding.issue}
                  <br />
                  {/* Uncomment below for recommendations */}
                  {/* {finding.recommendation && (
      <>
        <strong>Mitigating Actions:</strong> {finding.recommendation}
        <br />
      </>
    )} */}
                </div>
              ))}

            </p>
            <div className="action-buttons">
              <button className="button-wrapper" aria-label="Copy findings" onClick={() => { handleCopyClick() }} style={{ "marginTop": "0px" }}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc3366fb618a48362b000029ff6d79a82380f2547812fe25efdb6334a76a20a3?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="" className="button-icon" />
                <span className="button-text">Copy</span>
              </button>
              <button className="button-wrapper" aria-label="Share findings" onClick={() => { handleShareClick() }}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/351d06a8af9b954457b9e843a1b1d3e7a52d93230ffd1af5339c31a5d8871a3f?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="" className="button-icon" />
                <span className="button-text">Share</span>
              </button>
            </div>
          </div>
          <div className="download-print-buttons">
            <button className="action-button-downlaod" onClick={() => { handleDownloadClick() }}>Download</button>
            <button className="action-button-downlaod" onClick={() => { handlePrintClick() }}>Print</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuditFindings;