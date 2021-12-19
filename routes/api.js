const express = require('express');

const __path = process.cwd()
const router = express.Router();

const anime = require('./api/anime')
const asupan = require('./api/asupan')
const photooxy = require('./api/photooxy')
const textprome = require('./api/textprome')
const kuis = require('./api/kuis')
const search = require('./api/search')
const wallpaper = require('./api/wallpaper')

router.use('/anime', anime)
router.use('/asupan', asupan)
router.use('/photooxy', photooxy)
router.use('/textprome', textprome)
router.use('/kuis', kuis)
router.use('/search', search)
router.use('/wallpaper', wallpaper)

router.use(function(req, res){
    res.status(404).sendFile(__path + '/views/404.html')
})
  
module.exports = router