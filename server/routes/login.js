import Express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const login = Express.Router();

login.get("/assets/img-one.svg", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../src/routes/login/assets/img-one.svg")
  );
});

login.get("/assets/contact-bg.svg", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../src/routes/login/assets/contact-bg.svg")
  );
});

login.get("/assets/background.svg", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../src/routes/login/assets/background.svg")
  );
});

login.get("/login.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../../src/routes/login/login.css"));
});

export { login };
