import React from 'react';
import SidebarItem from './SidebarItem';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const sidebarItems = [
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea86de254a516581c29aaa6480ff5a1b67b50de5504ce9cfcf22bcd493309d46?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", altText: "Sidebar item 2" },
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/50f5e57bdf731d9140757d5df0b007ac35099620123ac78fbdb5d15ae92ef2af?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", altText: "Sidebar item 3" },
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1fcd4dfc5088fb9137eda7bfc6836676f185c9f05e8ea058d16967928bc1354?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", altText: "Sidebar item 4" },
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/71be55d492abad250f8caef2fcd3cf130d1acfe21ebf8314b34d4078f5f462a7?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", altText: "Sidebar item 5" },
  ];
const handleBackButton = () => {
  navigate(-1); 
  };
  return (
    <aside className="sidebar">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6df618ae8636df5739c65c0445c8a8045fd46b2191a0e0cf7d0ba0bd2ec097b1?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="Main sidebar icon" className="sidebar-icon" onClick={() => { handleBackButton()}} />
      {sidebarItems.map((item, index) => (
        <SidebarItem key={index} iconSrc={item.iconSrc} altText={item.altText} index={index} />
      ))}
    </aside>
  );
};

export default Sidebar;