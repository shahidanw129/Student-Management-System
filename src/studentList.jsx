import { useEffect, useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/student")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h2>Student List</h2>

      {students.map((s) => (
        <div key={s._id}>
          <p>{s.name} | {s.email} | {s.course}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;