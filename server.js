const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middelwares/errorMiddelwares");

// routes path
const authRoutes = require("./routes/authRoutes");
const openaiRoutes = require("./routes/openaiRoutes");

// dotenv
dotenv.config();

// mongo connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(
  cors({
    origin: ["https://aicrafthub.netlify.app"], // Add your Netlify frontend URL here
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // If you need to send cookies or credentials between the frontend and backend
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

// api routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", openaiRoutes);

// listen server
app.listen(PORT, () => {
  console.log(
    `server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
