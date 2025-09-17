const connectDB = require("./backend/config/db");
const express = require("express");
const bookRouter = require("./backend/routes/bookRouter");
const userRouter = require("./backend/routes/userRouter")


//const userRouter = require("./routes/userRouter");
//const {requestLogger,unknownEndpoint,errorHandler} = require("./middleware/customMiddleware");
 
// express app
const app = express();

connectDB();
 
// middleware
app.use(express.json());

//app.use(requestLogger);

app.get("/", (req, res) => res.send("API Running!"));

// routes

// Use the bookRouter for all /books routes
app.use("/api/books", bookRouter);

// Use the blogRouter for all /cars routes
app.use("/api/users", userRouter);

//app.use(unknownEndpoint);
//app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
