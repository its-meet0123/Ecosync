# Ecosync

Ecosync is a full-stack carbon footprint assistant that helps users estimate the environmental impact of everyday activities. It combines a React/Vite frontend with a Node.js/Express backend, and uses Google Gemini AI to generate structured carbon footprint insights and eco-friendly recommendations.

## 🚀 Features

- **AI-Powered Analysis**: Uses Google's Gemini 1.5 Flash model for intelligent carbon footprint calculations
- **Full-stack Interface**: Includes a React-based frontend for activity submission and result display
- **RESTful Backend**: Simple POST endpoint for activity analysis
- **CORS Enabled**: Supports frontend integration from `http://127.0.0.1:5173`
- **Environment Configuration**: Secure API key management with dotenv
- **JSON Responses**: Structured data output with carbon values, impact levels, and eco-tips

## 🛠 Tech Stack

- **Frontend**: React, Vite, Ant Design, Axios
- **Backend**: Node.js, Express, dotenv, CORS
- **AI**: Google Generative AI (Gemini 1.5 Flash)
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/its-meet0123/Ecosync.git
   cd Ecosync/ecosync-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Google Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   PORT=5000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`

## 📚 API Documentation

### POST /api/analyze

Analyzes the carbon footprint of a user activity.

**Request Body:**
```json
{
  "activity": "flying from New York to London"
}
```

**Response:**
```json
{
  "carbonValue": 450.5,
  "impact": "High",
  "tip": "Consider video conferencing instead of flying for business meetings"
}
```

**Error Response:**
```json
{
  "error": "AI analysis failed"
}
```

## 🔧 Development

### Available Scripts

- `npm start` - Start the development server
- `npm test` - Run tests (currently not implemented)

### Project Structure

```
ecosync-backend/
├── index.js          # Main server file
├── package.json      # Dependencies and scripts
├── .env              # Environment variables (gitignored)
├── .env.example      # Environment template
└── README.md         # This file
```

## 🔒 Security

- Never commit your `.env` file to version control
- Keep your Gemini API key secure and rotate regularly
- The service includes CORS configuration for frontend integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🌱 Environmental Impact

This project aims to help reduce carbon emissions by providing users with actionable insights about their environmental footprint. By making sustainable choices more visible and accessible, we hope to contribute to a greener future.