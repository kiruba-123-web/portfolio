const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

router.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    const userQuestion = question.toLowerCase().trim();
console.log("User Question:", userQuestion);
    const questions = await Question.find();
console.log("Questions:", questions);
    const result = questions.find((q) =>
      q.keywords.some((keyword) => {
        const key = keyword.toLowerCase().trim();

        return (
          userQuestion.includes(key) ||
          key.includes(userQuestion)
        );
      })
    );

    if (result) {
      return res.json({
        answer: result.answer,
      });
    }

    return res.json({
      answer:
        "I don't have an answer for that question yet. Please ask me about my skills, projects, achievements, career goals, or experience.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      answer: "Internal Server Error",
    });
  }
});

module.exports = router;