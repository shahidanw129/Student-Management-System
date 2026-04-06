function AdminDashboard() { 
  const recentStudents = [ 
    { name: "Shahid Anwar", course: "Computer Science", status: "Active" }, 
    { name: "Md Saif", course: "Mathematics", status: "Active" }, 
    { name: "Sahil Raza", course: "Physics", status: "Pending" }, 
    { name: "Hamid Husaain", course: "Chemistry", status: "Active" }, 
    { name: "Asif raza ", course: "Biology", status: "Active" }, 
  ]; 
 
  return ( 
    <div className="container"> 
      <h1>Admin Dashboard</h1> 
      <p>Overview of students, courses, and system activity.</p> 
 
      <div className="card-grid"> 
        <div className="card stat-card"> 
          <h3>Total Students</h3> 
          <p>120</p> 
        </div> 
 
        <div className="card stat-card"> 
          <h3>Total Courses</h3> 
          <p>10</p> 
        </div> 
 
        <div className="card stat-card"> 
          <h3>Active Users</h3> 
          <p>75</p> 
        </div> 
 
        <div className="card stat-card"> 
          <h3>Pending Registrations</h3> 
          <p>5</p> 
        </div> 
      </div> 
 
      <h2 style={{ marginTop: "30px" }}>          Recent Students</h2> 
      <div className="recent-students-grid"> 
        {recentStudents.map((student, index) => ( 
          <div key={index} className={`student-card ${student.status.toLowerCase()}`}> 
            <h3>{student.name}</h3> 
            <p><strong>Course:</strong> {student.course}</p> 
            <p> 
              <strong>Status:</strong>{" "} 
              <span className={`status ${student.status.toLowerCase()}`}> 
                {student.status} 
              </span> 
            </p> 
          </div> 
        ))} 
      </div> 
 
      <div className="card" style={{ marginTop: "30px" }}> 
        <h3>Upcoming Events / Exams</h3> 
        <ul> 
          <li>Math Exam – 25th March</li> 
          <li>Science Project Submission – 28th March</li> 
          <li>New Course Enrollment Deadline – 31st March</li> 
        </ul> 
      </div> 
    </div> 
  ); 
} 
 
export default AdminDashboard;