## 🧠 Technical Summary

This portfolio is a fully client-side web application built with **HTML**, **CSS**, and **JavaScript**, designed with modular architecture and clean separation of responsibilities.

### 🔹 Structure
The app follows a simple and organized layout:
- `index.html` — main UI structure
- `css/styles.css` — theme variables, layout system, animations, responsive design
- `js/script.js` — all interactive logic, API calls, state management
- `assets/` — images and static media
- `docs/` — technical documentation + AI usage report

### 🔹 Key Features & How They Work
- **Theme Toggle**  
  Uses CSS variables and updates the `data-theme` attribute on `<html>`.  
  Saves the user’s preference in `localStorage`.

- **Typing Greeting System**  
  Looped typing/deleting animation written with a single `setTimeout` loop.  
  Generates greetings dynamically based on the time of day and saved username.

- **Tabs Navigation**  
  A simple state system using `.active-section` classes for switching between  
  *About*, *Projects*, and *Contact* without page reloads.

- **Project Filter + Sort Controls**  
  Each project card includes metadata (`data-type`, `data-date`).  
  JavaScript filters by category and sorts chronologically.  
  User selections persist using `localStorage`.

- **GitHub API Integration**  
  Fetches repositories using GitHub’s REST API.  
  Dynamically builds cards with name, description, star count, and update date.  
  Includes graceful error fallback messaging.

- **Random Quote Generator**  
  Fetches quotes from `https://type.fit/api/quotes`.  
  If the API fails, it uses a local fallback list.  
  Includes a "New Quote" button for fetching new quotes on demand.

- **Contact Form Validation**  
  Validates fields using regex and required attribute checks.  
  Adds `<datalist>` suggestions for common email domains.  
  Shows a custom popup instead of actual form submission (front-end demo).

- **Visit Tracking**  
  Tracks time spent on the page and visit count using `localStorage` and timers.

### 🔹 Deployment
The site is deployed using **GitHub Pages**, with:
- `main` branch  
- Root directory (`/`) as the build target  
- Automatic rebuilds on each push

This ensures the portfolio is publicly accessible and update-friendly.

### 🔹 Performance & Accessibility
- `loading="lazy"` for images  
- Minimal DOM reflows  
- Accessible theme toggle (`aria-pressed`)  
- Responsive grid layouts with clean breakpoints  

A full detailed explanation of architecture, modules, and behavior is provided in:

📄 `docs/technical-documentation.md`
