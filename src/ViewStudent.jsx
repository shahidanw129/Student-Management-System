function ViewStudent() {
  const students = [
    { name: "Ali", course: "BCA", age: 20 },
    { name: "Rahul", course: "BBA", age: 21 },
    { name: "John", course: "MCA", age: 22 },
  ];

  return (
    <div>
      <h1>Students List</h1>

      {students.map((s, i) => (
        <div className="card" key={i}>
          <h3>{s.name}</h3>
          <p>Course: {s.course}</p>
          <p>Age: {s.age}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewStudent;