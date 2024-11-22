import {useState} from 'react';
import '../Recommended_action/auditStyle.css';
import { useNavigate } from 'react-router-dom';
import styles from '../Login/EmailInput.module.css';
const KnowledgeHubPrompt = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    if (!email.trim()) {
      alert('Please enter your query before submitting.');
    } else {
      navigate('/KnowledgeHubQuery');
    }
    
  };

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
      // You can style this or show it in a modal to improve UX
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
      <section className="main-content-audit" style={{ height: "600px" }}>
        <div className="content-wrapper-audit">
          <h1 className="title-audit">Ask queries from knowledge base</h1>
          <hr className="divider" />
            <div className={styles.inputWrapper}>
              <input
               type="email"
               id="email"
               className={styles.email}
               placeholder="Type your queries related to internal procedures, external guidelines, or other queries"
               value={email}
               onChange={handleInputChange}
               required
              />
            </div>
            <div className="download-print-buttons">
              <button type="submit" onClick={handleSubmit} className="action-button-Submit">Submit</button>
            </div>
        </div>
      </section>
    </main>
  );
};

export default KnowledgeHubPrompt;