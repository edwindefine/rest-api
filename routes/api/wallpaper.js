const express = require('express')

const router =  express.Router();
const __path = process.cwd()

const {
    creator,
    listkey,
    msgHandler
} = require('../message')

const {alphacoders, unsplash} = require(__path + "/lib/utils/wallpaper");
const anony = require(__path + "/lib/utils/wallpaper/anony.json");
const harley = require(__path + "/lib/utils/wallpaper/harley.json");
const joker = require(__path + "/lib/utils/wallpaper/joker.json");

router.get("/", async(req, res, next) => {
    res.sendFile(__path+'/views/api/wallpaper.html');
})

router.get("/alphacoders", async(req, res, next) => {
    const apikey = req.query.apikey;
    const query = req.query.query;
    let page = req.query.page;

    if(!page) page = 1
    if(!apikey) return res.json(msgHandler.notparam)
    if(!query) return res.json(msgHandler.notquery)

    if(listkey.includes(apikey)){
        alphacoders(query, page)
            .then((result) => {
                const hasil = {
                    status: true, 
                    code: 200,
                    creator: `${creator}`,
                    result: result
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

router.get("/unsplash", async(req, res, next) => {
    const apikey = req.query.apikey;
    const query = req.query.query;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(!query) return res.json(msgHandler.notquery)
    if(listkey.includes(apikey)){
        unsplash(query)
            .then((result) => {
                const hasil = {
                    status: true, 
                    code: 200,
                    creator: `${creator}`,
                    result: result
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

router.get("/anony", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anony
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/harley", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: harley
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/joker", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: joker
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});

module.exports = router
