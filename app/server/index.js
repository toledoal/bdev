const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require('./db');
var people = db[Object.keys(db)[0]];

console.log(__dirname);
//console.log(path.join(__dirname, 'client/people/dist/'));
app.use(express.static(path.join(__dirname, 'people/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/api/read', (req, res) => {
    res.json({data:people});
});

app.put('/api/update/:id', (req, res) => {
    if (req.body.name && req.body.id){
        let id = req.params.id;
        people.find(person => {
        if (person.id === id){
            person.name = req.body.name;
            res.json({data:`${id} updated`});
            }
        });
    }
});

app.post('/api/create', (req, res) => {
    console.log("post");
    if (req.body.name){
        var createdId = Math.random().toString(36).substring(2, 15);
        people.push({ id:createdId, name: req.body.name });
        res.json({data:`${createdId} created`});
    } else{
        res.json({data:`error`});
    }
});

app.delete('/api/delete/:id', (req, res) => {
    if (req.params.id){
        let id = req.params.id;
        people.find(person => {
        if (person.id === id){
            people.splice(people.indexOf(person),1);
            res.json({data:`${id} deleted`});
            }
        });
    }
});

app.listen(8000, ()=> { console.log(`Server listening to 8000`)});