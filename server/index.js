import Express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./routes/register.js";
import { login } from "./routes/login.js";
import { homepage } from "./routes/homepage.js";

const app = Express();

app.use("/register", register);
app.use("/login", login);
app.use("/homepage", homepage);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/homepage", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/routes/homepage/homepage.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/routes/register/register.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/routes/login/login.html"));
});


app.listen(8000, () => console.log("Server running "));
