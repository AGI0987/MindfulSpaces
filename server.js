const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');


dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
const app = express();
const port = 5000;

// Set up the generative AI model
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
  temperature: 1.2,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

// Create the model
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
  systemInstruction: "You are an emotional support buddy. Your task is to engage in conversations about mental health and emotional support for students. Respond empathetically, encourage a positive outlook, and use humor to lift the user's mood.",
  generationConfig,
});

// Use body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (index.html, loader.gif, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Chat endpoint
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body.userInput;
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    // Keep track of chat history
    let history = req.body.history || [];

    // Initialize chat session
    const chatSession = model.startChat({
      history: history.map(entry => ({
        role: entry.role,
        parts: [{ text: entry.parts[0] }],
      })),
    });

    // Get the model's response to user input
    const response = await chatSession.sendMessage(userInput);
    const modelResponse = response.response.text();

    // Append the user input and model response to the history
    history.push({ role: 'user', parts: [userInput] });
    history.push({ role: 'model', parts: [modelResponse] });

    // Return the updated history and model response
    res.json({ response: modelResponse, history });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
