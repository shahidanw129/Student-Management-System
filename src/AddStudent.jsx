import { useState } from "react";

function AddStudent() {
  const [name, setName] = useState("");

  const handleAdd = () => {
    alert("Student Added: " + name);
    setName("");
  };

  return (
    <div className="card">
      <h1>Add Student</h1>

      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button className="btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default AddStudent;