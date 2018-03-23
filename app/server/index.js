const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
var people = db[Object.keys(db)[0]];

console.log(__dirname);
//console.log(path.join(__dirname, 'client/people/dist/'));
app.use(express.static(path.join(__dirname, 'people/dist')));

app.get('/api/read', (req, res) => {
    res.json({data:people});
});

app.put('/api/update', (req, res) => {
    if (req.query.name && req.query.id){
        let id = req.query.id;
        people.find(person => {
        if (person.id = id){
            person.name = req.query.name;
            res.json({data:`${id} updated`});
            }
        });
    }
});

app.post('/api/create', (req, res) => {
    if (req.query.name){
        var createdId = Math.random().toString(36).substring(2, 15);
        people.push({id:createdId, name: req.query.name});
        res.json({data:`${id} created`});
    } else{
        res.json({data:`error`});
    }
});

app.delete('/api/delete', (req, res) => {
    if (req.query.id){
        let id = req.query.id;
        people.find(person => {
        if (person.id === id){
            people.splice(people.indexOf(person),1);
            res.json({data:`${id} deleted`});
            }
        });
    }
});

app.listen(8000, ()=> { console.log(`Server listening to 8000`)});