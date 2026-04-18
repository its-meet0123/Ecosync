# Ecosync Backend

A Node.js backend service that analyzes carbon footprints of user activities using Google's Gemini AI. This service provides environmental impact assessments to help users make more sustainable choices.

## 🚀 Features

- **AI-Powered Analysis**: Uses Google's Gemini 1.5 Flash model for intelligent carbon footprint calculations
- **RESTful API**: Simple POST endpoint for activity analysis
- **CORS Enabled**: Supports cross-origin requests for frontend integration
- **Environment Configuration**: Secure API key management with dotenv
- **JSON Responses**: Structured data output with carbon values, impact levels, and eco-tips

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **AI Model**: Google Generative AI (Gemini 1.5 Flash)
- **Security**: CORS, environment variables
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/its-meet0123/Ecosync-backend.git
   cd Ecosync-backend/ecosync-backend
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