// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // function Students() {
// //   const [students, setStudents] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:5000/api/students")
// //       .then((res) => setStudents(res.data))
// //       .catch((err) => console.log(err));
// //   }, []);

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h1>Student List</h1>

// //       {students.map((student) => (
// //         <div
// //           key={student._id}
// //           style={{
// //             border: "1px solid black",
// //             padding: "10px",
// //             marginBottom: "10px",
// //           }}
// //         >
// //           <h3>{student.name}</h3>
// //           <p>{student.email}</p>
// //           <p>{student.course}</p>
// //           <p>{student.year}</p>
// //           <p>{student.status}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Students;
// import { useEffect, useState } from "react";
// import axios from "axios";

// function Students() {
//   const [students, setStudents] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     course: "",
//     year: "",
//     status: "Active",
//   });

//   const fetchStudents = () => {
//     axios
//       .get("http://localhost:5000/api/students")
//       .then((res) => setStudents(res.data))
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/api/students", form);

//       setForm({
//         name: "",
//         email: "",
//         course: "",
//         year: "",
//         status: "Active",
//       });

//       fetchStudents();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/students/${id}`);
//       fetchStudents();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Student Management</h1>

//       <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="course"
//           placeholder="Course"
//           value={form.course}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="year"
//           placeholder="Year"
//           value={form.year}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Student</button>
//       </form>

//       <table border="1" cellPadding="10" width="100%">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Course</th>
//             <th>Year</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {students.map((student) => (
//             <tr key={student._id}>
//               <td>{student.name}</td>
//               <td>{student.email}</td>
//               <td>{student.course}</td>
//               <td>{student.year}</td>
//               <td>{student.status}</td>
//               <td>
//                 <button onClick={() => handleDelete(student._id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Students;