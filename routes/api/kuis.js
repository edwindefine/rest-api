const express = require('express')

const router = express.Router();
const __path = process.cwd()

const {
    creator,
    listkey,
    msgHandler
} = require('../message')

const tebakGambar = require(__path + '/lib/utils/tebakGambar')

router.get("/", async(req, res, next) => {
    res.sendFile(__path+'/views/api/kuis.html');
})

router.get('/tebakGambar', async (req, res, next) => {
    const apikey = req.query.apikey;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(listkey.includes(apikey)){
        let result = await tebakGambar()
        if (result) {
            const hasil = {
                status: true,
                code: 200,
                creator: `${creator}`,
                image: result.img,
                jawaban: result.jawaban,
                clue: result.petunjuk
            }
            res.json(hasil)
        } else {
            return res.status(408).json({
                status: res.statusCode,
                error: 'Error'
            })
        }
    } else {
        res.json(msgHandler.invalidKey)
    }
})

module.exports = router