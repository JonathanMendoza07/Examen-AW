const axios = require('axios');
const cheerio = require('cheerio');
const Server = require('./server');
const cron = require('node-cron');


const sub = require('./models');
const CRON_URI = require('./config');

const server = new Server();


cron.schedule('*/2 * * * *', async () => {
    
    try {
        const cpSub = await axios.get(CRON_URI+'/Subs');
        const $ = cheerio.load(cpSub.data);
        const allSub =$('table tbody tr');
        let newsMenber =[];
        allSub.each((index, menber)=>{
            let conte = cheerio.load(menber);


            newsMenber=[
                ...newsMenber,
                {
                    "Inicio":conte('.Finicio').text(),
                    "Fin":conte('.Ffin').text(),
                    "Datos":conte('.Cliente').text(),
                    "Menbre":conte('.Menbres').text(),
                    "Price":conte('.Precio').text(),
                    "Esta":conte('.tip').text()
                }
            ]
        })

        await sub.create(newsMenber);
    } catch (error) {
        console.log(err);
        throw new Error ('error al cargar el cron job')
    }
    
});