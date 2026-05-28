const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")

const app = express()



/* DATABASE CONNECTION */

connectDB()



/* MIDDLEWARE */

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoutes)



/* TEST ROUTE */

app.get("/", (req, res) => {
  res.send("API is running...")
})



/* PORT */

const PORT = process.env.PORT || 5000



/* SERVER */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})