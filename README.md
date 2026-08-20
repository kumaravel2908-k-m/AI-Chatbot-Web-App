# AI Chatbot Web App

An **AI-powered chatbot web application** built using **Python, Flask, JavaScript, HTML, CSS, and the Groq API**. The application allows users to ask questions through a web interface and receive AI-generated responses in real time.

## 🚀 Live Demo

https://ai-chatbot-web-app-lbe7.onrender.com

## 💻 GitHub Repository

https://github.com/kumaravel2908-k-m/AI-Chatbot-Web-App

## ✨ Features

* 🤖 AI-powered question answering
* 💬 Interactive chatbot interface
* ⚡ Real-time communication between frontend and Flask backend
* 🔄 Asynchronous API requests using JavaScript `fetch()`
* ⌨️ Press **Enter** to send messages
* 📜 Scrollable chat window
* ⏳ Loading indicator while waiting for the AI response
* 📱 Responsive and clean user interface
* 🔐 API key protected using environment variables
* 🌐 Deployed online using Render

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Python
* Flask

### AI Integration

* Groq API
* Groq-supported language model

### Tools & Deployment

* Git
* GitHub
* Render
* PyCharm

## 📁 Project Structure

```text
AI-Chatbot-Web-App/
│
├── app.py
├── requirements.txt
├── .gitignore
│
├── templates/
│   └── index.html
│
└── static/
    ├── css/
    │   └── style.css
    │
    └── js/
        └── script.js
```

## ⚙️ How It Works

1. The user enters a message in the chatbot interface.
2. JavaScript captures the user's message.
3. The frontend sends the message to the Flask `/chat` endpoint using a `POST` request.
4. Flask receives the JSON request.
5. The message is passed to the Groq API.
6. The AI generates a response.
7. Flask sends the AI response back to the browser.
8. JavaScript displays the response inside the chat window.

## 🔑 Environment Variable Setup

The Groq API key is **not stored directly in the source code**.

Create a `.env` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Replace `your_groq_api_key_here` with your own Groq API key.

**Never upload your actual API key to GitHub.**

The `.env` file should be included in `.gitignore`.

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/kumaravel2908-k-m/AI-Chatbot-Web-App.git
```

### 2. Open the project

```bash
cd AI-Chatbot-Web-App
```

### 3. Create a virtual environment

```bash
python -m venv .venv
```

### 4. Activate the virtual environment

**Windows:**

```bash
.venv\Scripts\activate
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Configure the API key

Create a `.env` file and add:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### 7. Run the application

```bash
python app.py
```

Open the application in your browser:

```text
http://127.0.0.1:5000
```

## 🌐 Deployment

The application is deployed using **Render**.

The deployed application is available at:

https://ai-chatbot-web-app-lbe7.onrender.com

The Groq API key is configured as an environment variable on the hosting platform instead of being exposed in the GitHub repository.

## 📸 Screenshots

### Chatbot Interface

Add your chatbot screenshot here.

```text
screenshots/chatbot-home.png
```

### AI Response

Add your AI response screenshot here.

```text
screenshots/ai-response.png
```

### Deployment

Add your deployment screenshot here.

```text
screenshots/render-deployment.png
```

> Replace the paths above with the actual screenshot paths if you have stored the screenshots inside the repository.

## 📚 What I Learned

Through this project, I learned how to:

* Build a web application using Flask.
* Connect a JavaScript frontend with a Python backend.
* Send and receive JSON data using HTTP requests.
* Use JavaScript `fetch()` for asynchronous communication.
* Integrate an AI API into a web application.
* Work with environment variables to protect API keys.
* Debug Flask and JavaScript errors.
* Use Git and GitHub for version control.
* Deploy a Flask application using Render.
* Configure environment variables for a deployed application.

## 🔒 Security

* API keys are stored using environment variables.
* `.env` is excluded from Git using `.gitignore`.
* No private API credentials are included in the GitHub repository.

## 🎯 Future Improvements

Possible future enhancements include:

* Chat history and conversation memory
* Clear chat button
* Multiple AI model selection
* User authentication
* Better error handling
* Markdown-formatted AI responses
* Voice input and output
* Database integration

## 👨‍💻 Author

**Kumaravel K M**

B.Tech – Information Technology

This project was developed as part of an internship project to gain practical experience in **Python, Flask, AI API integration, GitHub, and deployment**.
