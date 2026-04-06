import { Link } from "react-router-dom"; 
 
function Navbar() { 
  return ( 
    <div className="navbar"> 
      <h2>SMS</h2> 
 
      <div> 
        <Link to="/">Home</Link> 
        <Link to="/contact">Contact</Link> 
        <Link to="/admin">Admin</Link> 
        <Link to="/client">Client</Link> 
        <Link to="/login">Student Login</Link> 
      </div> 
    </div> 
  ); 
} 
 
export default Navbar;