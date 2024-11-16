import React from 'react';
import './styles.css';

const AuditFindings = () => {
  const sidebarIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6df618ae8636df5739c65c0445c8a8045fd46b2191a0e0cf7d0ba0bd2ec097b1?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Main icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea86de254a516581c29aaa6480ff5a1b67b50de5504ce9cfcf22bcd493309d46?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Secondary icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/50f5e57bdf731d9140757d5df0b007ac35099620123ac78fbdb5d15ae92ef2af?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Secondary icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1fcd4dfc5088fb9137eda7bfc6836676f185c9f05e8ea058d16967928bc1354?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Secondary icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/71be55d492abad250f8caef2fcd3cf130d1acfe21ebf8314b34d4078f5f462a7?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Secondary icon 4" },
  ];

  const findings = [
    {
      title: "Finding 1",
      content: "Stop production immediately for the affected batch to prevent further deviations. Isolate the batch in quarantine for further investigation. Alert the QC team to conduct an immediate investigation into contamination risks and deviations in key parameters (pH, temperature, DO). Perform a risk assessment to determine the extent of deviation and the potential impact on product quality."
    },
    {
      title: "Finding 2",
      content: "Test pH probes: Ensure that the pH sensors are properly calibrated. Check acid/base addition systems: Inspect the automated pH adjustment system for malfunctions. Immediate correction: Add the required acid or base to bring the pH back into the optimal range.",
      mitigatingActions: "Rebalance pH as needed and monitor its impact on culture growth. If pH was outside the acceptable range for a prolonged period, the batch may need to be discarded."
    },
    {
      title: "Finding 3",
      content: "Review oxygenation system: Check for any issues with the oxygen sparging system or air filters. Sensor calibration: Verify that the DO probes are accurate and functioning correctly. Agitation check: Ensure that agitation is sufficient to distribute oxygen evenly in the culture.",
      mitigatingActions: "Adjust airflow or agitation to restore optimal DO levels. If prolonged deviation occurred, assess whether the cells are viable."
    }
  ];

  return (
    <main className="audit-container">
      <aside className="sidebar">
        {sidebarIcons.map((icon, index) => (
          <div key={index} className="icon-wrapper">
            <img src={icon.src} alt={icon.alt} className="icon" />
          </div>
        ))}
      </aside>
      <section className="main-content">
        <div className="content-wrapper">
          <h1 className="title">Findings of Audit Checker</h1>
          <hr className="divider" />
          <div className="findings-container">
            <h2 className="visually-hidden">Audit Findings</h2>
            <p className="findings-text">
              <strong>Document Name : Quality Procedure 123.docx</strong><br />
              <strong>Date : 27-09/2024</strong><br />
              {findings.map((finding, index) => (
                <React.Fragment key={index}>
                  <strong>{finding.title} :</strong> {finding.content}<br />
                  {finding.mitigatingActions && (
                    <><strong>Mitigating Actions:</strong> {finding.mitigatingActions}<br /></>
                  )}
                </React.Fragment>
              ))}
            </p>
            <div className="action-buttons">
              <button className="button-wrapper" aria-label="Copy findings">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc3366fb618a48362b000029ff6d79a82380f2547812fe25efdb6334a76a20a3?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="" className="button-icon" />
                <span className="button-text">Copy</span>
              </button>
              <button className="button-wrapper" aria-label="Share findings">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/351d06a8af9b954457b9e843a1b1d3e7a52d93230ffd1af5339c31a5d8871a3f?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="" className="button-icon" />
                <span className="button-text">Share</span>
              </button>
            </div>
          </div>
          <div className="download-print-buttons">
            <button className="action-button">Download</button>
            <button className="action-button">Print</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuditFindings;