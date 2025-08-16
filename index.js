import express from 'express';

const app = express();
const PORT = 3000;

let users = [];
let idCounter = 0;


// get method returns a list of users => returns data in json format
app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: 'Andersson', lastName: 'Beaz', age: 21, email: 'andersson.beaz4313@alumnos.udg.mx' }, users
    ])
})




app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})