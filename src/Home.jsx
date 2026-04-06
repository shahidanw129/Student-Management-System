function Home() { 
  return ( 
    <div> 
 
      <div className="card" style={{ textAlign: "center" }}> 
        <h1>    Student Management System</h1> 
        <p>Manage students, courses, and records in one place</p> 
        <button>Get Started</button> 
      </div> 
 
      <div className="card-grid"> 
 
        <div className="card"> 
          <h3>      Dashboard</h3> 
          <p>View overall student statistics and data</p> 
        </div> 
 
        <div className="card"> 
          <h3>                           Student Records</h3> 
          <p>Store and manage all student information</p> 
        </div> 
 
        <div className="card"> 
          <h3>     Secure Login</h3> 
          <p>Safe and protected authentication system</p> 
        </div> 
 
      </div> 
 
      <div className="card-grid"> 
        <div className="card stat-card"> 
          <h3>Total Students</h3> 
          <p>120</p> 
        </div> 
 
        <div className="card stat-card"> 
          <h3>Courses</h3> 
          <p>8</p> 
        </div> 
 
        <div className="card stat-card"> 
          <h3>Active Users</h3> 
          <p>95</p> 
        </div> 
      </div> 
 
      <div className="card"> 
        <h3>Recent Students</h3> 
 
        <div className="student-grid"> 
 
          <div className="student-card"> 
            <h3>Shahid Anwar</h3> 
            <p>CE - 2nd Year</p> 
          </div> 
 
          <div className="student-card"> 
            <h3>Md Saif</h3> 
            <p>MCA - 1st Year</p> 
          </div> 
 
          <div className="student-card"> 
            <h3>Sahil Raza</h3> 
            <p>BBA - 2nd Year</p> 
          </div> 
 
        </div> 
      </div> 
 
      <div className="card" style={{ textAlign: "center" }}> 
        <h3>Start Managing Students Today        </h3> 
        <p>Simple, fast and efficient system</p> 
        <button>Explore Now</button> 
      </div> 
 
    </div> 
  ); 
} 
 
export default Home;