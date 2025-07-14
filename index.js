const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// Xử lý webhook từ người dùng (bé Muối)
app.post("/webhook", (req, res) => {
  const voiceText = (req.body.text || "Không có nội dung").toLowerCase();
  console.log("Voice content:", voiceText);

  let reply = "Bác chưa hiểu rõ lắm, con nói lại được không?";

  if (voiceText.includes("chào")) {
    reply = "Bác Gấu chào Muối nhé!";
  } else if (voiceText.includes("yêu")) {
    reply = "Bác Gấu cũng yêu Muối nhiều lắm!";
  } else if (voiceText.includes("mệt")) {
    reply = "Muối nghỉ ngơi một chút nha, bác ở đây nè.";
  }

  res.send(reply);
});

// Trang chủ
app.get("/", (req, res) => {
  res.send("Bác Gấu backend đang chạy...");
});

// Kiểm tra hoạt động
app.get("/ping", (req, res) => {
  res.send("Pong from Bác Gấu!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server listening on port", PORT));
