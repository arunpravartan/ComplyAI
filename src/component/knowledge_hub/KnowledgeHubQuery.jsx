import React from 'react';
import './auditStyle.css';
import styles from '../Login/EmailInput.module.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const KnowledgeHubQuery = () => {
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


    const handleCopyClick = () => {
        const textToCopy = document.querySelector('.findings-text').textContent;
        navigator.clipboard.writeText(textToCopy);
        alert("Copied to clipboard");
    }

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
    const handleShareClick = () => {
        const textToShare = document.querySelector('.findings-text').textContent;

        // Encode text to make it URL-friendly
        const encodedText = encodeURIComponent(textToShare);
        const encodedUrl = encodeURIComponent(window.location.href);

        // Check if the Share API is available
        if (navigator.share) {
            navigator.share({
                title: 'Findings to Share',
                text: textToShare,
                url: window.location.href,
            }).catch((error) => console.error('Sharing failed', error));
        } else {
            // Fallback: Create custom share links for Email and WhatsApp
            const emailLink = `mailto:?subject=Check this out&body=${encodedText}`;
            const whatsappLink = `https://wa.me/?text=${encodedText}`;

            // Open share options in a new window
            const shareMenu = document.createElement('div');
            shareMenu.innerHTML = `
        <div>
          <a href="${emailLink}" target="_blank">Share via Email</a>
        </div>
        <div>
          <a href="${whatsappLink}" target="_blank">Share via WhatsApp</a>
        </div>
      `;
            document.body.appendChild(shareMenu);

        }
    };
    const handleRewriteClick = () => {
        const findingsText = document.querySelector('.findings-text');
        if (findingsText) {

            findingsText.textContent = findingsText.textContent + " - Revised";
            alert("Findings have been rewritten!");
        } else {
            alert("No findings to rewrite.");
        }
    };

    return (
        <main className="audit-container">
            <aside className="sidebar-audit">
                {sidebarIcons.map((icon, index) => (
                    <div key={index} className="icon-wrapper">
                        <img src={icon.src} alt={icon.alt} className="icon" onClick={() => handleIconClick(index)} />
                    </div>
                ))}
            </aside>
            <section className="main-content">
                <div className="content-audit">
                    <h1 className="title-audit">Ask queries from knowledge base </h1>
                    <hr className="divider" />
                    <div className="findings-container">
                        <p className="findings-text">
                            <strong>Document Name : {fileName || 'N/A'}</strong><br />
                            <strong>Date : {new Date().toLocaleDateString()}</strong><br />
                            {Array.isArray(findings) && findings.length > 0 ? (
                                findings.map((finding, index) => (
                                    <React.Fragment key={index}>
                                        <strong>Finding {index + 1} :</strong> {finding}<br />
                                    </React.Fragment>
                                ))
                            ) : (
                                <em>No findings available</em>
                            )}
                        </p>
                        <div className="action-buttons">
                            <button className="button-wrapper" aria-label="Copy findings" onClick={() => { handleCopyClick() }}>
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc3366fb618a48362b000029ff6d79a82380f2547812fe25efdb6334a76a20a3?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="" className="button-icon" />
                                <span className="button-text">Copy</span>
                            </button>
                            <button className="button-wrapper" aria-label="Share findings" onClick={() => { handleShareClick() }}>
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/351d06a8af9b954457b9e843a1b1d3e7a52d93230ffd1af5339c31a5d8871a3f?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="" className="button-icon" />
                                <span className="button-text">Share</span>
                            </button>
                            <button className="button-wrapper" aria-label="Rewrite findings" onClick={handleRewriteClick}>
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/351d06a8af9b954457b9e843a1b1d3e7a52d93230ffd1af5339c31a5d8871a3f?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="" className="button-icon" />
                                <span className="button-text">Rewrite</span>
                            </button>
                        </div>
                    </div>
                    <input
                        type="email"
                        id="email"
                        className={styles.text}
                        placeholder="Enter your Text Here"
                        required
                    />
                    <div className="download-print-buttons">
                        <button type="submit" className="button-Submit">Submit</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default KnowledgeHubQuery;