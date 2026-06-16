import { useState, useMemo, useCallback } from "react";
import { patients, doctors } from "../data";

function Dashboard() {
  console.log("Dashboard Rendered");

  const [count, setCount] = useState(0);

  const totalPatients = useMemo(() => {
    console.log("Calculating Patients Count");
    return patients.length;
  }, []);

  const totalDoctors = useMemo(() => {
    console.log("Calculating Doctors Count");
    return doctors.length;
  }, []);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="page-card">
      <h2>Healthcare Dashboard</h2>

      <div className="stats">
        <div className="stat-box">
          <h3>{totalPatients}</h3>
          <p>Total Patients</p>
        </div>

        <div className="stat-box">
          <h3>{totalDoctors}</h3>
          <p>Total Doctors</p>
        </div>
      </div>

      <hr />

      <h3>Mini Challenge - Re-render Test</h3>

      <p>Count: {count}</p>

      <button className="btn" onClick={handleIncrement}>
        Re-render Dashboard
      </button>
    </div>
  );
}

export default Dashboard;