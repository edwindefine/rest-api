const express = require('express');

const __path = process.cwd()
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path+'/views/index.html');
})
router.get('/docs', (req, res) => {
    res.sendFile(__path+'/views/docs.html');
})
router.get('/contact', (req, res) => {
    res.sendFile(__path+'/views/contact.html');
})

module.exports = router 