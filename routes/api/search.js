const { default: axios } = require('axios');
const express = require('express')

const router =  express.Router();
const __path = process.cwd()

const {
    creator,
    listkey,
    msgHandler
} = require('../message')

const {wikipedia} = require(__path + "/lib/utils/search");

router.get("/", async(req, res, next) => {
    res.sendFile(__path+'/views/api/search.html');
})

router.get("/wikipedia", async(req, res, next) => {
    const langtype = ['id', 'en']

    const apikey = req.query.apikey;
    const query = req.query.query;
    let lang = req.query.lang

    if(!lang) lang = 'id'
    if(!apikey) return res.json(msgHandler.notparam)
    if(!query) return res.json(msgHandler.notquery)
    if(!langtype.includes(lang)) return res.json(msgHandler.invalidLang)

    if(listkey.includes(apikey)){
        wikipedia(query, lang)
            .then((result) => {
                const hasil = {
                    status: true, 
                    code: 200,
                    creator: `${creator}`,
                    title: result.title,
                    result: result.result
                }
                res.json(hasil)
            })
            .catch((e) => {
                res.json(msgHandler.error)
            })
    } else {
        res.json(msgHandler.invalidKey)
    }
});


module.exports = router