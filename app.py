from flask import Flask, render_template,request
from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("GROQ_API_KEY")
# print(api_key)

client = Groq(api_key=api_key)

app = Flask(__name__)

def ask_ai(question):
    response = client.chat.completions.create(
        model="openai/gpt-oss-20b",
        messages=[
            {
                "role": "user",
                "content": question
            }
        ]
    )

    return response.choices[0].message.content

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    message = data["message"]
    print(message)

    response = ask_ai(message)

    return response



if __name__ == "__main__":
    app.run(debug=True)