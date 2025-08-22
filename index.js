import express from 'express';

const app = express();
const PORT = 3000;

let users = [
    { id: 1, name: 'Andersson', lastName: 'Beaz', age: 21, email: 'andersson.beaz4313@alumnos.udg.mx' }
];
let idCounter = 0;


// get method returns a list of users => returns data in json format
app.get("/users", (req, res) => {
    try {
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
})




app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})