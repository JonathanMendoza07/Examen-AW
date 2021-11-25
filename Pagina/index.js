const express = require ("express");
const cors = require("cors");
const fs = require("fs");


const PORT = 6001;

const pagina = fs.readFileSync('./index.html');

const page =express();


page.use(cors());
page.use(express.json());
page.listen(PORT, ()=>{
console.log('Funcionando');
});



page.get('/', (req, res)=>{
    res.write(pagina);
    res.send();
})