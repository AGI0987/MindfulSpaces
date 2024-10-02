# Mindful-Space
## Overview

Mindful Space is an AI-powered chatbot designed to provide mental health and emotional support to students. It leverages Google's Gemini API to understand and empathize with user emotions, offering personalized assistance through a conversational interface.

![Screenshot 2024-10-02 134837](https://github.com/user-attachments/assets/7a644333-d6fc-49fb-b8b5-f86ba4990280)


## Features

- **AI-Powered Conversations**: Uses Gemini's NLU and empathy features to provide emotionally intelligent responses.
- **User Support**: Offers mental health and emotional support for students.
- **Real-time Conversations**: The frontend is built using React for real-time communication.
- **Responsive UI**: Designed to work on various devices with a user-friendly chatbot interface.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js
- **AI API**: Google Gemini API for natural language understanding and empathy
- **Database**: MongoDB for chat history persistence (still working on it)

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/get-npm) 
- A Google Gemini API key (you can sign up for API access [here](https://cloud.google.com/))
- [MongoDB](https://www.mongodb.com/) 

### Clone the Repository

```bash
git clone https://github.com/AGI0987/MindfulSpaces.git
cd MindfulSpace
node server.js
```
### Architecture Diagram

```plaintext
       |----------------|       |---------------------|      |-----------|
       |                |       |                     |      |           |
       |   Backend API  |<----->|  Google Gemini API  |<---->|  MongoDB  |
       |  (Node.js)     |       |  (Natural Language  |      | (Database)|
       |                |       |  Understanding)     |      |           |
       |----------------|       |---------------------|      |-----------|
      API Request/Response           AI Processing          Chat Storage/Retrieval
```
## Screenshots

![Screenshot 2024-10-02 134837](https://github.com/user-attachments/assets/31f23981-5f71-4b37-9c5a-0bbf212c3ca1)


![Screenshot 2024-10-02 134820](https://github.com/user-attachments/assets/275f51d8-b04c-4a4f-acc7-e258fc3a2681)



