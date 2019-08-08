const express = require("express")
const app = express();
app.use(express.json());

const todo = [{
    id: 1,
    title: "awake on 6 pm  ",
    Completed: false
},
{
    id: 2,
    title: "solvethe ass ",
    Completed: true
},
{
    id: 3,
    title: "call jozaa ",
    Completed: false
},
{
    id: 4,
    title: "sleep on 9  ",
    Completed: true
}]

app.get('/tasks', (req, res) =>
    // res.send(todo)
    res.json(todo)
)

app.post('/tasks', (req, res) => {
    let item = req.body;
    todo.push(item);
    res.json(todo);
});


app.delete('/tasks/:id', (req, res) => {
    let id = parseInt(req.params.id);
    for (const i in todo) {
        if (todo[i].id === id) {
            todo.splice(i, 1);
        }
    }
    res.json(todo);
});

//we can use map and delete but i think this isright and easy to do :)


const PORT = 10000;
app.listen(PORT, () => console.log(`your port is ${PORT}`))

