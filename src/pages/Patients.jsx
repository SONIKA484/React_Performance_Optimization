import { useState, useMemo, useCallback } from "react";
import { patients } from "../data";
import PatientCard from "../components/PatientCard";

function Patients() {
  console.log("Patients Component Rendered");

  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPatients = useMemo(() => {
    console.log("Filtering Patients...");

    return patients.filter((patient) =>
      patient.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="page-card">
      <h2>Patients Page</h2>

      <input
        className="search-box"
        placeholder="Search Patient"
        value={search}
        onChange={handleSearch}
      />

      <hr />

      {filteredPatients.map((patient) => (
        <PatientCard
          key={patient.id}
          patient={patient}
        />
      ))}
    </div>
  );
}

export default Patients;