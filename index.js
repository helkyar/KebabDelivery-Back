const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(require("express").json());

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
