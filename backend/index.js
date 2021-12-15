const express = require("express")
const app = express()
const port = 5000

app.use(express.json())

const users = require("./routes/users")

app.use("/", users)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})