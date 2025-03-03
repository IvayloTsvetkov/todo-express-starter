import express from "express";
import cors from "cors";

let i = 1;

let todos = [
  {
    id: i++,
    title: "Todo 1",
    completed: true,
  },
  {
    id: i++,
    title: "Todo 2",
    completed: false,
  },
  {
    id: i++,
    title: "Todo 3",
    completed: false,
  },
];

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
