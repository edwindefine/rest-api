const express = require('express')

const router =  express.Router();
const __path = process.cwd()

const {
    creator,
    listkey,
    msgHandler
} = require('../message')
const bocil = require(__path + "/lib/utils/asupan/bocil.json");
const cecan = require(__path + "/lib/utils/asupan/cecan.json");
const geayubi = require(__path + "/lib/utils/asupan/geayubi.json");
const hijaber = require(__path + "/lib/utils/asupan/hijaber.json");
const rikagusriani = require(__path + "/lib/utils/asupan/rikagusriani.json");
const santuy = require(__path + "/lib/utils/asupan/santuy.json");
const ukhty = require(__path + "/lib/utils/asupan/ukhty.json");

router.get("/", async(req, res, next) => {
    res.sendFile(__path+'/views/api/asupan.html');
})

router.get("/bocil", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: bocil
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/cecan", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: cecan
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/geayubi", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: geayubi
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/hijaber", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: hijaber
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/rikagusriani", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: rikagusriani
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/santuy", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: santuy
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});
router.get("/ukhty", async(req, res, next) => {
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: ukhty
        })
    } else {
        res.json(msgHandler.invalidKey)
    }
});

module.exports = router