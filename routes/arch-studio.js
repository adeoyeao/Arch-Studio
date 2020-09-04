const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")

const router = express.Router()

router.use(bodyParser.urlencoded({extended: true}))
router.use(express.static(path.join(__dirname, "../public")))

router.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.get("/about", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/about-us.html"))
})

router.get("/contact", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/contact-us.html"))
})

router.get("/portfolio", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/portfolio.html"))
})

router.post("/contact-us", (req, res) => {
      const name = req.body.name;
      const email = req.body.email;
      const message = req.body.message;

      let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                  user: process.env.GMAIL_USER,
                  pass: process.env.GMAIL_PASS,
            },
      });

      const msg = {
            from: `"Arch Studio Contact Form" <ithaca.deployment@gmail.com>`,
            to: "ithaca.deployment@gmail.com",
            subject: "New message from contact form at Arc-Studio.com",
            text: `${name}, ${email}, has sent the following message:
            ${message}.`,
      };

      const info = transporter.sendMail(msg, (error, response) => {
            if (error) {
                  res.sendFile(path.join(__dirname, "/../public/contact-failure.html"));
            } else {
                  res.sendFile(path.join(__dirname, "/../public/contact-success.html"));
            }
      });     
})

module.exports = router

