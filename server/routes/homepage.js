import Express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const homepage = Express.Router();

homepage.get("/assets/img-one.svg", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../src/routes/homepage/assets/img-one.svg")
  );
});

homepage.get("/assets/contact-bg.svg", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../src/routes/homepage/assets/contact-bg.svg")
  );
});

homepage.get("/assets/background.svg", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../src/routes/homepage/assets/background.svg")
  );
});

homepage.get("/homepage.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../../src/routes/homepage/homepage.css"));
});

export { homepage };
