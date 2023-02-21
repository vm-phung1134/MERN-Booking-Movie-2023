const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    console.log('Connected to mongoDB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = {connectDB}
