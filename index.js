
console.log("Phiên bản bác Gấu đang chạy: 2025-07-14-18h");
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

