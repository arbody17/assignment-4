# 🌐 Abdulrahman — Personal Portfolio  
### Assignment 4 – Full Web Application

This project is my complete personal portfolio web application built for **Assignment 4**.  
It combines modern design, responsive layout, and interactive front-end features using **HTML, CSS, and JavaScript**.

🔗 **Live Website:**  
> https://arbody17.github.io/assignment-4/

---

## ✨ Features

### 🌗 Dark / Light Theme Toggle  
- Uses CSS variables for dynamic themes  
- Saves user preference using `localStorage`  
- Accessible toggle with `aria-pressed`

### 🙋 Personalized Greeting  
- Prompts the visitor for their name  
- Saves it permanently using `localStorage`  
- Generates a dynamic greeting based on time of day  
- Typing and deleting animation cycles through messages

### 💬 Random Quote Generator  
- Fetches quotes from an external API (`https://type.fit/api/quotes`)  
- Includes graceful fallback quotes when API fails  
- Refresh quote button

### 🧩 Projects Section  
- Project cards with images and descriptions  
- **Filter** projects by category (Web, AI, Research)  
- **Sort** by newest or oldest  
- Saves filter/sort options using `localStorage`

### 🐙 GitHub Activity Integration  
- Uses GitHub REST API  
- Displays latest repositories with stars, update dates, and links  
- Fully dynamic card rendering

### 📬 Contact Form  
- Validates name, email, message  
- Email format validated with regex  
- Dropdown suggestions for common domains  
- Custom funny “message sent” popup  
- (Front-end only — no backend)

### ⏱️ Visit Stats  
- Tracks how long the user has been on the site  
- Counts number of visits locally  
- Runs entirely using browser storage

### 📱 Responsive Design  
- Mobile-first layout  
- CSS Grid + Flexbox  
- Smooth breakpoints at 800px and 500px

---

## 🧱 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure |
| **CSS3** | Theming, layout, animations |
| **JavaScript (ES6)** | Logic, state management, interactivity |
| **Git & GitHub** | Version control |
| **GitHub Pages** | Deployment |
| **External APIs** | Quotes API + GitHub API |

---

## 📂 Folder Structure

## 📂 Folder Structure
```
assignment-4/
├── index.html
├── css/
│ └── styles.css
├── js/
│ └── script.js
├── assets/
│ └── images/
├── docs/
│ ├── ai-usage-report.md
│ └── technical-documentation.md
├── presentation/
│ ├── slides.pdf
│ └── demo-video.mp4
└── README.md

```

## 🧠 Logic & State Management

- 🔎 Project filtering & sorting (category + date) with persistent state

- ⏱️ Time-on-site tracker

- 👣 Visit counter using localStorage

- 🧪 Validations for contact form inputs

- 🚀 Smart email validation + domain suggestions

- 😂 Funny “message sent successfully” popup after form submission

- 🌍 External API Integrations

- 🐙 GitHub API

- Shows my latest public repositories dynamically (name, description, stars, update date)

- Includes error handling + friendly fallback message if the API is unavailable

- 💬 Inspiration Quote API (with graceful fallback)

- Fetches random motivational quotes

- If the API fails, a random local quote is displayed

- “New Quote” button to refresh instantly

---

## ⚙️ Installation & Usage  

This project is **front-end only** — no backend setup required.  

### 1. Clone the Repository  
```bash
git clone https://github.com/arbody17/assignment-4.git
cd assignment-4
```


## 📑 Documentation  
For more details, see:  
- [`docs/technical-documentation.md`](docs/technical-documentation.md)  
- [`docs/ai-usage-report.md`](docs/ai-usage-report.md)  
- [View PDF Slides]() *(https://drive.google.com/file/d/1Hk-YnD1QKcWoeVPjm4M9memFEdeSTP4b/view?usp=drive_link)*  
- [View Portfolio Online]() *(https://drive.google.com/file/d/10aUwwSI3RH8sHUPaWnJB_nMqr53HjRq-/view?usp=drive_link)* 

---

## 🚀 Live Demo  
👉 [View Portfolio Online]() *(https://drive.google.com/file/d/10aUwwSI3RH8sHUPaWnJB_nMqr53HjRq-/view?usp=drive_link)*  

---

## 🧠 Learning Outcomes  
Through this project, I enhanced my **front-end development skills** and explored how to create interactive user experiences using pure **JavaScript**.  
I learned how to:  
- Build **dynamic UI components** (typing effects, popups, and theme toggles)  
- Use **localStorage** to maintain user preferences  
- Validate and enhance **form inputs**  
- Improve **user engagement** through small animations and humor  
- Write **cleaner, modular code** with reusable functions  

This assignment helped me understand how to transform static HTML pages into **engaging, user-friendly interfaces**.  

---

👨‍💻 **Author:** Abdulrahman  
📅 **Assignment 4 — Portfolio Enhancement**
# assignment-4
