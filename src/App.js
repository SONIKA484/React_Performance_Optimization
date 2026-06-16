import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";

import Dashboard from "./pages/Dashboard";

const Patients = lazy(() => import("./pages/Patients"));
const Doctors = lazy(() => import("./pages/Doctors"));

function App() {
  return (
    <div className="app-container">
        <h1 className="title">Healthcare App</h1>

      <nav className="navbar">
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/patients">Patients</Link> |{" "}
        <Link to="/doctors">Doctors</Link>
      </nav>

      <hr />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;