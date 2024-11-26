import React from 'react';
import { useNavigate } from 'react-router-dom';


const SidebarItem = ({ iconSrc, altText, index }) => {
  
  const navigate = useNavigate();
  const handleIconClick = (index) => {
    if (index === 0) {
      navigate('/dashboard');
    } 
    if (index === 1) {
      window.location.reload();
    }
  }
  return (
    <div className="sidebar-item" style={{ 'marginTop': altText === "Sidebar item 4" ? "490px" : "0px" }}>
      <img loading="lazy" src={iconSrc} alt={altText} className="sidebar-item-icon" onClick={() => {handleIconClick(index)}}/>
    </div>
  );
};

export default SidebarItem;