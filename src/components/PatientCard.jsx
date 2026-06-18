import React from "react";

function PatientCard({ patient }) {
  console.log("PatientCard Rendered:", patient.name);

  return (
    <div className="patient-card">
  <h3>{patient.name}</h3>
  <p>ID: {patient.id}</p>
  <p>Age: {patient.age}</p>
</div>
  );
}

export default React.memo(PatientCard);