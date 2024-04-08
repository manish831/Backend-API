const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Import routes
const adminRoutes = require("./routes/adminRoutes");
const matchRoutes = require("./routes/matchRoutes");
const teamRoutes = require("./routes/teamRoutes");
const playerRoutes = require("./routes/playerRoutes");

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/admin", adminRoutes); //adminRoutes handles all requests that start with "/api/admin"
app.use("/api/matches", matchRoutes); //matchRoutes handles all requests that start with "/api/matches
app.use("/api/teams", teamRoutes); //teamRoutes handles all requests that start with "/api/teams"
app.use("/api/players", playerRoutes); //playerRoutes handles all requests that start with "/api/players"

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.use((err, req, res, next) => {
  res.status(500).send("Something happened wrong!!");
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
