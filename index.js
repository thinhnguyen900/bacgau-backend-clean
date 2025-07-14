const express = require("express");
//const admin = require("firebase-admin");
const bodyParser = require("body-parser");const app = express();
app.use(bodyParser.json());

//const serviceAccount = require("./serviceAccountKey.json");
//admin.initializeApp({
// credential: admin.credential.cert(serviceAccount)
});

const voiceText = (req.body.text || "Không có nội dung").toLowerCase();

console.log("Voice content:", voiceText);

let reply = "Bác chưa hiểu rõ lắm, con nói lại được không?";

// Phản hồi linh hoạt dựa theo nội dung
if (voiceText.includes("chào")) {
  reply = "Bác Gấu chào Muối nhé!";
} else if (voiceText.includes("yêu")) {
  reply = "Bác Gấu cũng yêu Muối nhiều lắm!";
} else if (voiceText.includes("mệt")) {
  reply = "Muối nghỉ ngơi một chút nha, bác ở đây nè.";
}

res.send(reply);

});

app.get("/", (req, res) => res.send("Bác Gấu backend đang chạy..."));

// Route kiểm tra kết nối server
app.get("/ping", (req, res) => {
  res.send("Pong from Bác Gấu!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server listening on port", PORT));