// function Client() {
//   const students = [
//     { name: "Shahid Anwar", course: "Computer Science", status: "Active", progress: "95%" },
//     { name: "Md Saif", course: "Mathematics", status: "Active", progress: "80%" },
//     { name: "Sahil Raza", course: "Physics", status: "Pending", progress: "50%" },
//     { name: "Hamid Husaain", course: "Chemistry", status: "Active", progress: "70%" },
//   ];

//   const notifications = [
//     "Math Exam on 25th March",
//     "Science Project Submission due on 28th March",
//     "New course enrollment deadline: 31st March",
//   ];

//   return (
//     <div className="container">
//       <h1>Client Panel</h1>
//       <p>View student information, course progress, and system notifications.</p>

//       {/* Quick Stats */}
//       <div className="card-grid">
//         <div className="card stat-card">
//           <h3>Total Students</h3>
//           <p>{students.length}</p>
//         </div>
//         <div className="card stat-card">
//           <h3>Active Courses</h3>
//           <p>4</p>
//         </div>
//         <div className="card stat-card">
//           <h3>Pending Tasks</h3>
//           <p>2</p>
//         </div>
//       </div>

//       {/* Student List */}
//       <h2 style={{ marginTop: "30px" }}>📚 Students</h2>
//       <div className="student-grid">
//         {students.map((student, index) => (
//           <div key={index} className={`student-card ${student.status.toLowerCase()}`}>
//             <h3>{student.name}</h3>
//             <p><strong>Course:</strong> {student.course}</p>
//             <p><strong>Status:</strong> <span className={`status ${student.status.toLowerCase()}`}>{student.status}</span></p>
//             <p><strong>Progress:</strong> {student.progress}</p>
//           </div>
//         ))}
//       </div>

//       {/* Notifications */}
//       <div className="card" style={{ marginTop: "30px" }}>
//         <h3>🔔 Notifications</h3>
//         <ul>
//           {notifications.map((note, idx) => (
//             <li key={idx}>{note}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Client;

function Client() { 
  const students = [ 
    { name: "Shahid Anwar", course: "Computer Science", status: "Active", progress: "95%" }, 
    { name: "Md Saif", course: "Mathematics", status: "Active", progress: "80%" }, 
    { name: "Sahil Raza", course: "Physics", status: "Pending", progress: "50%" }, 
    { name: "Hamid Husaain", course: "Chemistry", status: "Active", progress: "70%" }, 
  ]; 
 
  const notifications = [ 
    "Math Exam on 25th March", 
    "Science Project Submission due on 28th March", 
    "New course enrollment deadline: 31st March", 
  ]; 
 
  return ( 
    <div className="container"> 
      <h1>Client Panel</h1> 
      <p>View student information, course progress, and system notifications.</p> 
 
      <div className="card-grid"> 
        <div className="card stat-card"> 
          <h3>Total Students</h3> 
          <p>{students.length}</p> 
        </div> 
        <div className="card stat-card"> 
          <h3>Active Courses</h3> 
          <p>4</p> 
        </div> 
        <div className="card stat-card"> 
          <h3>Pending Tasks</h3> 
          <p>2</p> 
        </div> 
      </div> 
 
      <h2 style={{ marginTop: "30px" }}>             Students</h2> 
      <div className="student-grid"> 
        {students.map((student, index) => ( 
          <div key={index} className={`student-card ${student.status.toLowerCase()}`}> 
            <h3>{student.name}</h3> 
            <p><strong>Course:</strong> {student.course}</p> 
            <p><strong>Status:</strong> <span className={`status ${student.status.toLowerCase()}`}>{student.status}</span></p> 
            <p><strong>Progress:</strong> {student.progress}</p> 
          </div> 
        ))} 
      </div> 
 
      <div className="card" style={{ marginTop: "30px" }}> 
        <h3>    Notifications</h3> 
        <ul> 
          {notifications.map((note, idx) => ( 
            <li key={idx}>{note}</li> 
          ))} 
        </ul> 
      </div> 
    </div> 
  ); 
} 
 
export default Client;