const {response} = require('express');
const Subs = require('../models');


const GetMenbresiStatus = async ( req, res = response)=>{
    const dato={Fecha: Date.now}
    const responseGet = await Subs.find(dato);

    res.status(200).json(responseGet);
}

const InsertMenber = async(req, res = response)=>{
    const sub = new Subs(req.body);
    const subsNuevas = await sub.save();
    return res.status(200).send("Subscripción guardada");
}


module.exports={
    GetMenbresiStatus,
    InsertMenber
};