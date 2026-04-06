import { useState } from "react";
import "./App.css";

function StudentLogin() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
    age: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      // ✅ सिर्फ message दिखे
      alert(data.message || "Student Added Successfully ✅");

    } catch (error) {
      console.error(error);
      alert("Backend connection error ❌");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>🎓 Student Form</h2>

        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="course" placeholder="Course" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentLogin;