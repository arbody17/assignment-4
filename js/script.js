// ============================
// Theme toggle with localStorage
// ============================
function setupThemeToggle() {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  function setTheme(next) {
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeToggle.setAttribute("aria-pressed", String(next === "dark"));
  }

  const stored = localStorage.getItem("theme");
  if (stored) {
    setTheme(stored);
  }

  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  });
}

// ============================
// Typing Greeting (looped)
// ============================
function setupTypingGreeting() {
  const greetingEl = document.getElementById("greeting");
  const usernameInput = document.getElementById("username");
  const saveButton = document.getElementById("saveName");
  if (!greetingEl || !usernameInput || !saveButton) return;

  const hour = new Date().getHours();
  const baseGreeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  const storedName = localStorage.getItem("visitorName") || "friend";
  let userName = storedName;

  const phrases = [
    `${baseGreeting}, ${userName}!`,
    "Welcome to my humble portfolio.",
    "Hope you're having a great day!",
    "Let's build something amazing together!"
  ];

  let current = 0;
  let isDeleting = false;
  let text = "";

  function type() {
    const fullText = phrases[current];
    text = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    greetingEl.textContent = text;

    let speed = isDeleting ? 60 : 100;
    if (!isDeleting && text === fullText) {
      speed = 1500; // pause after full text
      isDeleting = true;
    } else if (isDeleting && text === "") {
      isDeleting = false;
      current = (current + 1) % phrases.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }

  // update name dynamically when saved
  saveButton.addEventListener("click", () => {
    const newName = usernameInput.value.trim();
    if (newName) {
      localStorage.setItem("visitorName", newName);
      userName = newName;
      phrases[0] = `${baseGreeting}, ${userName}!`;
    }
  });

  type();
}

// ============================
// Tabs switching
// ============================
function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".section");

  if (!tabButtons.length || !sections.length) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const target = btn.dataset.target;
      sections.forEach((sec) => {
        sec.classList.remove("active-section");
        if (sec.id === target) sec.classList.add("active-section");
      });
    });
  });
}

// ============================
// Read More / Read Less
// ============================
function setupReadMore() {
  const toggleBtn = document.getElementById("toggleAbout");
  const hidden = document.getElementById("moreAbout");
  if (!toggleBtn || !hidden) return;

  toggleBtn.addEventListener("click", () => {
    hidden.classList.toggle("show");
    toggleBtn.textContent = hidden.classList.contains("show")
      ? "Read Less"
      : "Read More";
  });
}

// ============================
// Contact Form with Email Validation + Funny Popup
// ============================
function setupContactForm() {
  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("email");
  if (!form || !emailInput) return;

  const emailSuggestions = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"];

  // Add datalist for email domains
  const dataList = document.createElement("datalist");
  dataList.id = "emailSuggestions";
  emailSuggestions.forEach((domain) => {
    const option = document.createElement("option");
    option.value = "@" + domain;
    dataList.appendChild(option);
  });
  emailInput.setAttribute("list", "emailSuggestions");
  document.body.appendChild(dataList);

  function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("🧐 Please fill all fields, genius!");
      return;
    }

    if (!isValidEmail(email)) {
      alert("🚨 Invalid email! Please enter a proper email address (e.g., name@gmail.com).");
      return;
    }

    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "var(--card)";
    popup.style.color = "var(--text)";
    popup.style.padding = "1.5rem 2rem";
    popup.style.borderRadius = "1rem";
    popup.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
    popup.style.zIndex = "9999";
    popup.style.textAlign = "center";
    popup.innerHTML = `
      <h3>✅ Message Sent Successfully!</h3>
      <p>😂 Your message just went to the void... but we’ll pretend it was delivered successfully! 👍🤖</p>
      <p><span style="font-size:2rem;">✨👍💬</span></p>
    `;

    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 4000);
    form.reset();
  });
}

// ============================
// Projects Filter + Sort
// ============================
function setupProjectFilters() {
  const filterSelect = document.getElementById("projectFilter");
  const sortSelect = document.getElementById("projectSort");
  const projectList = document.getElementById("projectList");

  if (!filterSelect || !sortSelect || !projectList) return;

  let cards = Array.from(projectList.querySelectorAll(".card"));

  const savedFilter = localStorage.getItem("projectFilter");
  const savedSort = localStorage.getItem("projectSort");

  if (savedFilter) filterSelect.value = savedFilter;
  if (savedSort) sortSelect.value = savedSort;

  function applyFilters() {
    const filter = filterSelect.value;
    const sort = sortSelect.value;

    localStorage.setItem("projectFilter", filter);
    localStorage.setItem("projectSort", sort);

    const filteredCards = cards.filter((card) => {
      const type = card.dataset.type || "other";
      if (filter === "all") return true;
      return type === filter;
    });

    filteredCards.sort((a, b) => {
      const dateA = new Date(a.dataset.date || "2000-01-01").getTime();
      const dateB = new Date(b.dataset.date || "2000-01-01").getTime();
      return sort === "newest" ? dateB - dateA : dateA - dateB;
    });

    projectList.innerHTML = "";
    filteredCards.forEach((card) => projectList.appendChild(card));
  }

  filterSelect.addEventListener("change", applyFilters);
  sortSelect.addEventListener("change", applyFilters);

  applyFilters();
}

// ============================
// GitHub API Integration
// ============================
function setupGitHubRepos() {
  const statusEl = document.getElementById("githubStatus");
  const listEl = document.getElementById("githubRepos");
  if (!statusEl || !listEl) return;

  const GITHUB_USERNAME = "arbody17";

  async function loadRepos() {
    try {
      statusEl.textContent = "Loading your latest repositories...";

      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`
      );

      if (!response.ok) {
        throw new Error("GitHub API request failed with status " + response.status);
      }

      const repos = await response.json();

      if (!Array.isArray(repos) || repos.length === 0) {
        statusEl.textContent = "No public repositories found for this user.";
        return;
      }

      statusEl.textContent = "";

      repos.forEach((repo) => {
        const card = document.createElement("article");
        card.className = "card";

        const description = repo.description || "No description provided.";

        card.innerHTML = `
          <div class="card-body">
            <h3>${repo.name}</h3>
            <p>${description}</p>
            <p class="muted small">
              ⭐ ${repo.stargazers_count} · Updated: ${new Date(
                repo.updated_at
              ).toLocaleDateString()}
            </p>
            <a class="btn btn-outline small" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        `;

        listEl.appendChild(card);
      });
    } catch (error) {
      console.error(error);
      statusEl.textContent =
        "Unable to load GitHub projects right now. Please try again later.";
    }
  }

  loadRepos();
}

// ============================
// Footer year
// ============================
function setupFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ============================
// Visit stats: timer + visit count
// ============================
function setupVisitStats() {
  const timeOnSiteEl = document.getElementById("timeOnSite");
  const visitCountEl = document.getElementById("visitCount");
  if (!timeOnSiteEl || !visitCountEl) return;

  const previous = Number(localStorage.getItem("visitCount") || "0");
  const next = previous + 1;
  localStorage.setItem("visitCount", String(next));
  visitCountEl.textContent = String(next);

  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    timeOnSiteEl.textContent = String(seconds);
  }, 1000);
}

// ============================
// Random Quote (API + fallback)
// ============================
function setupRandomQuote() {
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const newQuoteBtn = document.getElementById("newQuoteBtn");

  if (!quoteText || !quoteAuthor || !newQuoteBtn) return;

  const fallbackQuotes = [
    { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" }
  ];

  function useFallbackQuote() {
    const random = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    quoteText.textContent = `“${random.text}”`;
    quoteAuthor.textContent = `— ${random.author}`;
  }

  async function loadQuote() {
    try {
      quoteText.textContent = "Loading a cool quote for you...";
      quoteAuthor.textContent = "";

      const res = await fetch("https://type.fit/api/quotes");

      if (!res.ok) {
        throw new Error("API error: " + res.status);
      }

      const data = await res.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("API returned no quotes");
      }

      const random = data[Math.floor(Math.random() * data.length)];
      const text = random.text || "";
      const author = random.author || "Unknown";

      if (!text) throw new Error("Missing quote text");

      quoteText.textContent = `“${text}”`;
      quoteAuthor.textContent = `— ${author}`;
    } catch (err) {
      console.error("Quote API failed → using fallback", err);
      useFallbackQuote();
    }
  }

  newQuoteBtn.addEventListener("click", loadQuote);

  loadQuote();
}

// ============================
// Init
// ============================
document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupTypingGreeting();
  setupTabs();
  setupReadMore();
  setupFooterYear();
  setupContactForm();
  setupProjectFilters();
  setupGitHubRepos();
  setupVisitStats();
  setupRandomQuote();
});
