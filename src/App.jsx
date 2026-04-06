import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Home";
import Contact from "./Contact";
import AdminDashboard from "./AdminDashboard";
import Client from "./Client";
import StudentLogin from "./StudentLogin";
import StudentList from "./studentList";   // ✅ NEW IMPORT

function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      {/* login page पर container remove */}
      <div className={location.pathname === "/login" ? "" : "container"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/client" element={<Client />} />
          <Route path="/login" element={<StudentLogin />} />
          
          {/* ✅ NEW ROUTE */}
          <Route path="/students" element={<StudentList />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;