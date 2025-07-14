const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.post("/webhook", (req, res) => {
  const voiceText = req.body.text || "Không có nội dung";
  console.log("Voice content:", voiceText);
  res.send("Đã nhận voice");
});

app.get("/", (req, res) => res.send("Bác Gấu backend đang chạy..."));

// Route kiểm tra kết nối server
app.get("/ping", (req, res) => {
  res.send("Pong from Bác Gấu!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server listening on port", PORT));