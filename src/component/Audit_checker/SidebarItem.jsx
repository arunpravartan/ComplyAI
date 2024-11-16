import React from 'react';

const SidebarItem = ({ iconSrc, altText }) => {
  return (
    <div className="sidebar-item">
      <img loading="lazy" src={iconSrc} alt={altText} className="sidebar-item-icon" />
    </div>
  );
};

export default SidebarItem;