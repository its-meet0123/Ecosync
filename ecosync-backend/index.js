const express = require('express');
const cors = require('cors');
const axios = require('axios');
//const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();

// CORS configuration for frontend
const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY;
// Latest Stable v1 Endpoint
const GOOGLE_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`;

app.post('/api/analyze', async (req, res) => {
  try {
    const { activity } = req.body;

    const payload = {
      contents: [{
        parts: [{
          text: `Analyze activity: "${activity}". Return strictly JSON: {"carbonValue": number, "impact": "High/Low", "tip": "string"}. No extra text.`
        }]
      }]
    };

    const response = await axios.post(GOOGLE_API_URL, payload, {
      headers: { 'Content-Type': 'application/json' }
    });

    // Google API se text nikalna
    const aiText = response.data.candidates[0].content.parts[0].text;
    
    // JSON Clean up
    const cleanJson = aiText.replace(/```json|```/g, "").trim();
    res.json(JSON.parse(cleanJson));

  } catch (error) {
    console.error("API ERROR:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "API connection failed", details: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
