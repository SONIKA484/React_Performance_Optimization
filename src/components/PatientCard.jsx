import React from "react";

function PatientCard({ patient }) {
  console.log("PatientCard Rendered:", patient.name);

  return (
    <div className="patient-card">
      <h3>{patient.name}</h3>
      <p>Age: {patient.age}</p>
      <hr />
    </div>
  );
}

export default React.memo(PatientCard);