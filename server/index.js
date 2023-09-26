const express = require("express");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


//Routers
const randomRouter = require("./routes/random");


// Routes
app.use("/random", randomRouter);



const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});
