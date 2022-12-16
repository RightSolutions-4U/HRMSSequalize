const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const router =  require("./routes/index");
const testRoutes = require('./routes/index');

// Import my test routes into the path '/test'



//console.log(router);
require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();
//const router = express.Router();

app.use(
  express.json({
    limit: "10mb",
  })
);

app.use(
  express.urlencoded({
    limit: "10mb",
    extended: false,
    parameterLimit: 10000,
  })
);

//Enable cors
app.use(cors());
app.use(morgan("common"));
// app.use(router);
app.get("/api", (req, res) => {
//   const response = new Response(
//     true,
//     200,
//     `Welcome to Sequelize Project ${port}`
//   );
//   res.status(response.code).json(response);
res.send('Hello');
});
app.get("/country", testRoutes);
app.listen(`${port}`, () => console.log(`Server running at http://localhost:${port}`)); 