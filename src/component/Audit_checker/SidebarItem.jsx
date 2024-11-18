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
    <div className="sidebar-item">
      <img loading="lazy" src={iconSrc} alt={altText} className="sidebar-item-icon" onClick={() => {handleIconClick(index)}}/>
    </div>
  );
};

export default SidebarItem;