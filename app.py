from flask import Flask, render_template

app = Flask(__name__, template_folder=".", static_folder="static")

portfolio = {
    "name": "Sakthi Prakash",
    "title": "php Developer | Python Developer",
    "subtitle": "Welcome to My Digital Hogwarts",
    "location": "Tamil Nadu, India",
    "Working exprience": "meantech solutions 08/2024-11/2024  JK fenner 12/2026-present",

    "about": """
    Passionate developer with experience in server-side development,
    automation, web technologies, and problem solving.
    I enjoy building scalable applications and creating unique user experiences.
    """,

    "skills": [
        {
            "name": "Python",
            "spell": "Expecto Codronum"
        },
        {
            "name": "PHP",
            "spell": "Serverus Maxima"
        },
        {
            "name": "JavaScript",
            "spell": "Scriptum Lumos"
        },
        {
            "name": "HTML",
            "spell": "Structura Charm"
        },
        {
            "name": "CSS",
            "spell": "Stylius Magica"
        },
        {
            "name": "MySQL",
            "spell": "Databaseus"
        }
    ],

    "projects": [
        {
            "name": "ATM Management System",
            "icon": "🏦",
            "description": """
            Banking management application with account handling,
            transaction processing, and reporting.
            """
        },
        {
            "name": "Food Restaurant Website",
            "icon": "🍽️",
            "description": """
            Responsive restaurant website with menu display
            and ordering features.
            """
        },
        {
            "name": "Automatic Report Generator",
            "icon": "📊",
            "description": """
            Automated report generation system
            for enterprise workflow optimization.
            """
        },
        {
            "name": "ChatterPufz",
            "icon": "🤖",
            "description": """
            An AI-powered chat application with a modern and
            interactive conversational experience.
            """,
            "demo_link": "https://chatterpuffz.streamlit.app/"
        },
        {
            "name": "My Old Portfolio",
            "icon": "💼",
            "description": """
            A previous personal portfolio website showcasing
            my earlier web development and design work.
            """,
            "demo_link": "https://sakthiprakah.github.io/myportfolio/"
        },
        {
            "name": "Resume",
            "icon": "📄",
            "description": """
            My professional resume highlighting skills,
            experience, and achievements.
            """
        }
    ],

    "contact": {
        "email": "sakthiprakash0077@gmail.com",
        "github": "https://github.com/sakthiprakah"
    }
}


@app.route("/")
def home():
    return render_template(
        "index.html",
        portfolio=portfolio
    )


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)