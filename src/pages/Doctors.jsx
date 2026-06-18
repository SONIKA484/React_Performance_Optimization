import { doctors } from "../data";

function Doctors() {
  console.log("Doctors Component Rendered");

  return (
    <div className="page-card">
      <h2>Doctors Page</h2>

      {doctors.map((doctor) => (
    <div
      key={doctor.id}
      className="patient-card"
    >
      <h3>{doctor.name}</h3>
      <p>ID: {doctor.id}</p>
    </div>
      ))}
    </div>
  );
}

export default Doctors;