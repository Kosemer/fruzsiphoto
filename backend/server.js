require("dotenv").config();

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  host: "mail.nethely.hu",
  port: 465, // Vagy 1025, ha SSL használat nélküli beállítást szeretnél
  secure: true, // Vagy false, ha SSL használat nélküli beállítást szeretnél
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const photoType = req.body.photoType;
  const mail = {
    from: name,
    to: "keserucsaba1234@gmail.com",
    subject: "Contact Form Message",
    html: `<p>Name: ${name}</p><p>E-mail: ${email}</p><p>Fotó fajtája: ${photoType}</p></p><p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});