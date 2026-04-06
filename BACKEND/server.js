// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");

// const app = express();

// // middleware
// app.use(express.json());
// app.use(cors());

// // DB connect
// connectDB();

// // routes
// app.use("/api", require("./routes/studentRoutes"));

// // server start
// app.listen(5000, () => {
//   console.log("Server running on port 5000 🚀");
// });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// DB connect
connectDB();

// routes
app.use("/api", require("./routes/studentRoutes"));

// server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});