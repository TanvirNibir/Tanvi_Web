const mongoose = require("mongoose"); 

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/bookish");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.mess);
    process.exit(1);
  }
};


module.exports = connectDB;
 
// suggestion: connection string should be a variable and not exposed!