import React from 'react';
import './auditStyle.css';

const KnowledgeHubQuery = ({findings, reWrite}) => {
    const [findingsText, setFindingsText] = React.useState(findings);
    const handleCopyClick = () => {
        const textToCopy = document.querySelector('.findings-text').textContent;
        navigator.clipboard.writeText(textToCopy);
        alert("Copied to clipboard");
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
        reWrite();
    };

    return (
        <div className="findings-container" style={{"marginLeft": "173px", "width": "71%"}}>
            <p className="findings-text" style={{height : '270px', overflow : 'scroll', overflowX: 'hidden'}}>{findingsText}</p>
            <div className="action-buttons">
                <button className="button-wrapper" aria-label="Copy findings" onClick={() => { handleCopyClick() }}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc3366fb618a48362b000029ff6d79a82380f2547812fe25efdb6334a76a20a3?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="" className="button-icon" />
                    <span className="button-text">Copy</span>
                </button>
                <button className="button-wrapper" aria-label="write findings" onClick={() => { handleRewriteClick()  }} style={{marginRight: "550px"}}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/351d06a8af9b954457b9e843a1b1d3e7a52d93230ffd1af5339c31a5d8871a3f?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="" className="button-icon" />
                    <span className="button-text">Rewrite</span>
                </button>
                <button className="button-wrapper" aria-label="Rewrite findings" onClick={() => {handleShareClick()}}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/351d06a8af9b954457b9e843a1b1d3e7a52d93230ffd1af5339c31a5d8871a3f?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="" className="button-icon" />
                    <span className="button-text">Share</span>
                </button>
            </div>
        </div>
    );
};

export default KnowledgeHubQuery;