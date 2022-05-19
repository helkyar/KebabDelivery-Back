const app = require("express")();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(require("express").json());

//EMAIL ____________________________________________
// const nodemailer = require("nodemailer");
// nodemailer.createTestAccount;
// (error, account) => {
//   const htmlEmail =
//     "<h3>Email enviado desde react</h3> <ul> <li>Email: javipalacios@gmail.com</li><li>Asunto: test</li></ul> <h3>Mensaje</h3> <>cuerpo del mensaje</>";
// };
// let transporter = nodemailer.createTransport({
//   host: "",
//   port: "",
//   auth: { user: "", pass: "" },
// });
// let mail = {
//   from: "",
//   to: "",
//   replyTo: "",
//   subject: "",
//   text: "",
//   html: htmlEmail,
// };
// transporter.sendMail(mail, (err, info) => {});
// _____________________________________________
// SERVE IMG____________________________________
// app.get("/images", (req, res) => {
//   // Setting the headers
//   res.writeHead(200, {
//     "Content-Type": "image/png",
//   });

//   // Reading the file
//   fs.readFile(`static`, function (err, content) {
//     // Serving the image
//     res.end(content);
//   });
// });
// ____________________________________________

app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
