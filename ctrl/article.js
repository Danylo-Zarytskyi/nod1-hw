const articles = [
    
];

const getById = (id) => {
    const article = articles.find(item => item.id === id);
    return article;
};

const axios = require('axios');
const url = 'https://swapi.dev/api/people/1';

let penis = async () => {

    const res = await axios.get(url);
    
    const characterData = res.data;

    console.log('Інформація про персонажа:');
    console.log('Ім\'я:', characterData.name);
    console.log('Стать:', characterData.gender);
    console.log('Дата народження:', characterData.birth_year);
    console.log('Колір очей:', characterData.eye_color);

};





module.exports = {
    getById,
    penis
};
