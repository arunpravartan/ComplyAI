import React from 'react';
import ActionBar from './ActionBar';

function AnswerSection() {
  return (
    <section className="answer-container-knowledge">
      <p className="answer-text-knowledge">
        Here is the SOP for <strong>Handling Contamination Events</strong> (Incident Management)
        <br />
        •This SOP defines the steps to be taken when contamination is detected, including containment, investigation, and corrective actions.
        <br />
        •Key Actions: Quarantine affected products, document the contamination event, and follow the Corrective and Preventive Actions (CAPA) procedure.
        <br />
        Ref :
        <ol>
          <li>
            <em>Quality procedure for contamination : </em>
            <em><u>Procedure 237-56</u></em>
          </li>
          <li>
            <em>FDA Guidelines for Autoclave operations : </em>
            <em><u>FDA Guide ABC 3.421</u></em>
          </li>
        </ol>
      </p>
      <ActionBar />
    </section>
  );
}

export default AnswerSection;