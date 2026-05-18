import { Database } from "bun:sqlite";
import { Hono } from "hono"

const db = new Database("./src/routes/features/users/cars.db");

// Create table
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
    surname TEXT
    date_of_birth TEXT
    email TEXT
    password TEXT
    date_joined TEXT
  )
`);

//thre will be text here to fill db and make sure it has rows

const app = new Hono()

app.get("/client/:id",(c)=>{// le ":" sert juste à en faire un paramètre pour la logique interne, à ne pas mettre dans l'url
    const id = c.req.param("id")
    const index = Number(id)
    query = db.query(select * from users where id = ?)
    entrees = query.get(index)
    
    return c.json(entrees)
})

app.post("/signin", async (c) => {//route à créer (quand on clique sur"créer un compte")
    const {n,s,dob,e,p,dj} = await c.req.json()
    db.run(`
  INSERT INTO users (name, surname, date_of_birth, email, password, date_joined)
  VALUES (n,s,dob,e,p,dj)
  `)
    return c.json({response : `coucou ${n}`, user : {n,s,dob,e,p,dj}})})

export default app