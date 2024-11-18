import React from 'react';

const ProcedureList = () => {
  const procedures = [
    { name: "Procedure 1", active: true },
    { name: "Procedure 2", active: false },
    { name: "Procedure 3", active: false },
    { name: "Procedure 4", active: false },
  ];

  return (
    <section className="procedure-list">
      <div className="procedure-header">
        <div>In Progress</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/31d0435471f21125e81896a4782d0b4ab6169b1e944e0fc0f368af366b012f80?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="In progress icon" className="sidebar-item-icon" />
      </div>
      {procedures.map((procedure, index) => (
        <div key={index} className={`procedure-item ${procedure.active ? 'procedure-item-active' : ''}`}>
          {procedure.name}
        </div>
      ))}
    </section>
  );
};

export default ProcedureList;