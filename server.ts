import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://https://bigcorp.netlify.app/"] //Netlify frontend URL
        : "*",
  })
);
app.use(express.json());

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  setTimeout(() => {
    res.json({
      message: `Thank you for your interest, ${name}`,
    });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
