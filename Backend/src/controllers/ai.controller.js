const aiService = require("../services/ai.services.js");

module.exports.getReview = async(req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const response = await aiService.main(code);
  if (!response) {
    return res.status(500).json({ error: "Failed to generate response" });
  }
  return res.status(200).json({ response });
};
