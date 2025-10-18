// I used AI to help me write this code

// app.js
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3005;

// Serve static assets (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Root route - serves your main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

// Form route - serves your form page
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
