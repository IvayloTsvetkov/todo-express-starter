import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const db = new Database("todos.db");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/todos", (req, res) => {
  const todos = db.prepare<unknown[], Todo>("SELECT * from todos").all();
  res.send(todos);
});

const port = 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
