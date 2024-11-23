import React from 'react';

function Sidebar() {
  const sidebarItems = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6df618ae8636df5739c65c0445c8a8045fd46b2191a0e0cf7d0ba0bd2ec097b1?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Main sidebar icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea86de254a516581c29aaa6480ff5a1b67b50de5504ce9cfcf22bcd493309d46?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Sidebar item 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/50f5e57bdf731d9140757d5df0b007ac35099620123ac78fbdb5d15ae92ef2af?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Sidebar item 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1fcd4dfc5088fb9137eda7bfc6836676f185c9f05e8ea058d16967928bc1354?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Sidebar item 3", css: "400px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/71be55d492abad250f8caef2fcd3cf130d1acfe21ebf8314b34d4078f5f462a7?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065", alt: "Sidebar item 4" }
  ];

  return (
    <aside className="sidebar-knowledge">
      <img src={sidebarItems[0].src} alt={sidebarItems[0].alt} className="sidebar-icon-knowledge" />
      {sidebarItems.slice(1).map((item, index) => (
        <div key={index} className="sidebar-item-knowledge">
          <img src={item.src} alt={item.alt} className="sidebar-item-icon-knowledge" />
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;