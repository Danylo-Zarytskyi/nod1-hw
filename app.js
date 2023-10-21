const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const server = express();
const path = require('path');

const articleCtrl = require("./ctrl/article");

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.json({ a: 10 });
});

server.get('/123', (req, res) => {
    res.json({ a: 12 });
});

server.get('/character/:id', async (req, res) => {
    const characterId = Number(req.params.id);

    try {

        const response = await axios.get(`https://swapi.dev/api/people/${characterId}/`)
        const characterData = response.data;
        

        const characterName = characterData.name;
        const characterGender = characterData.gender;
        const characterBirthYear = characterData.birth_year;
        const characterEyeColor = characterData.eye_color;

        res.render('index', {
            name: characterName,
            gender: characterGender,
            birthYear: characterBirthYear,
            eyeColor: characterEyeColor
        });

    }catch {}
    

    
    

    
});

server.listen(3000);

