import React from 'react';

function ActionBar() {
  const actions = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc3366fb618a48362b000029ff6d79a82380f2547812fe25efdb6334a76a20a3?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", label: "Copy", alt: "Copy icon" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/532346ad6a2552dceca5bfc3040f93692d07b8ee6dd27f3ee0f91e8e25ff1052?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", label: "Rewrite", alt: "Rewrite icon" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/351d06a8af9b954457b9e843a1b1d3e7a52d93230ffd1af5339c31a5d8871a3f?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", label: "Share", alt: "Share icon" }
  ];

  return (
    <div className="action-bar-knowledge">
      <div className="action-group-knowledge">
        {actions.map((action, index) => (
          <button key={index} className="action-button-knowledge" aria-label={action.label}>
            <img src={action.icon} alt={action.alt} className="action-icon-knowledge" />
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ActionBar;