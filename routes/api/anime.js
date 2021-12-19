const express = require('express')
const hx = require('hxz-api');
const axios = require('axios')

const router =  express.Router();
const __path = process.cwd()

const {
    creator,
    listkey,
    msgHandler
} = require('../message')

router.get("/", async(req, res, next) => {
    res.sendFile(__path+'/views/api/anime.html');
})

/*** Chara ***/
router.get("/chara", async(req, res, next) => {
    const apikey = req.query.apikey;
    const query = req.query.query;

    if(!apikey) return res.json(msgHandler.notparam)
    if(!query) return res.json(msgHandler.notquery)

    if(listkey.includes(apikey)){
        hx.chara(query)
            .then((chara) => {
                if(chara.length === 0) return res.json(msgHandler.notresult)
                res.json({
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: chara
                })
            })
            .catch((err) => console.log(err))
    } else {
        res.json(msgHandler.invalidKey)
    }
});

/*** Random Wallpaper ***/
/* Image */
router.get("/wallanime", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/neko", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/neko`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/waifu", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/waifu`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/avatar", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/avatar`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/holo", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/holo`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/gecg", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/gecg`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});

/* Gif/Animation Image */
router.get("/smug", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/smug`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/hug", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/hug`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/slap", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/slap`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/feed", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/feed`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/poke", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/poke`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/pat", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/pat`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/tickle", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/tickle`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/cuddle", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let anime = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: anime.data.url
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});

module.exports = router