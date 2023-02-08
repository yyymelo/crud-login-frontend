import Express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const register = Express.Router();

register.get("/assets/img-one.svg", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../src/routes/register/assets/img-one.svg")
  );
});

register.get("/assets/contact-bg.svg", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../src/routes/register/assets/contact-bg.svg")
  );
});

register.get("/assets/background.svg", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../src/routes/register/assets/background.svg")
  );
});

register.get("/register.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../../src/routes/register/register.css"));
});

export { register };
