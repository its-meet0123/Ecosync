const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/analyze', async (req, res) => {
  try {
    const { activity } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `User activity: "${activity}". 
    Analyze the carbon footprint of this activity. 
    Return a JSON response with:
    1. "carbonValue" (estimated kg of CO2 as a number)
    2. "impact" (High, Medium, Low)
    3. "tip" (A short eco-friendly alternative tip).
    Strictly return only JSON.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // JSON clean up for safety
    const cleanJson = text.replace(/```json|```/g, "");
    res.json(JSON.parse(cleanJson));
  } catch (error) {
    res.status(500).json({ error: "AI analysis failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
