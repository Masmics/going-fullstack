const express = require('express');
const app = express();
const shortid = require('shortid');
const fs = require('fs');

app.use(express.json());
app.get('/api/nonprofits', (req, res) => {
  const nonprofits = readData();
    if(req.query.name) {
    const match = req.query.name.toLowerCase();
    const filtered = nonprofits.filter(non => {
        return non.name.toLowerCase().startsWith(match):
    });
    res.json(filtered);
    }
    else {
        res.json(nonprofits);
    }
});

app.post('/api/nonprofits', (req, res) => {
    const nonprofits = readData();
    const nonprofit = req.body;
    nonprofit.id = shortid.generate();
    nonprofits.push(nonprofit);
    saveData(nonprofits);

    res.json(nonprofit);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log('server app started on the port', PORT);
});