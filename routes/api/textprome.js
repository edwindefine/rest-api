const express = require('express')
const zrapi = require("zrapi");

const router = express.Router();
const __path = process.cwd()

const {
    creator,
    listkey,
    msgHandler
} = require('../message')

router.get("/", async(req, res, next) => {
    res.sendFile(__path+'/views/api/textprome.html');
})

router.get('/logo-wolf', async(req, res, next) => {
    const apikey = req.query.apikey;
    const text = req.query.text;
    const text2 = req.query.text2;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text) return res.json(msgHandler.nottext1)
    if(!text2) return res.json(msgHandler.nottext2)
    
    if(listkey.includes(apikey)){
        zrapi.textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [text, text2])
            .then((data) => {
                res.json({
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: data
                })
            })
            .catch((err) => console.log(err));
    } else {
        res.json(msgHandler.invalidKey)
    }
});
    
router.get('/logo-wolf2', async(req, res, next) => {
    const apikey = req.query.apikey;
    const text = req.query.text;
    const text2 = req.query.text2;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text) return res.json(msgHandler.nottext1)
    if(!text2) return res.json(msgHandler.nottext2)
    
    if(listkey.includes(apikey)){
        zrapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [text, text2])
            .then((data) => {
                res.json({
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: data
                })
            })
            .catch((err) => console.log(err));
    } else {
        res.json(msgHandler.invalidKey)
    }
});

router.get('/natural-leaves', async(req, res, next) => {
    const apikey = req.query.apikey;
    const text = req.query.text;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text) return res.json(msgHandler.nottext1)
    
    if(listkey.includes(apikey)){
        zrapi.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [text])
            .then((data) => {
                res.json({
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: data
                })
            })
            .catch((err) => console.log(err));
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get('/matrix', async(req, res, next) => {
    const apikey = req.query.apikey;
    const text = req.query.text;
    const text2 = req.query.text2;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text) return res.json(msgHandler.nottext1)
    if(!text2) return res.json(msgHandler.nottext2)
    
    if(listkey.includes(apikey)){
        zrapi.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [text])
            .then((data) => {
                res.json({
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: data
                })
            })
            .catch((err) => console.log(err));
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get('/firework', async(req, res, next) => {
    const apikey = req.query.apikey;
    const text = req.query.text;
    const text2 = req.query.text2;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text) return res.json(msgHandler.nottext1)
    if(!text2) return res.json(msgHandler.nottext2)
    
    if(listkey.includes(apikey)){
        zrapi.textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [text])
            .then((data) => {
                res.json({
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: data
                })
            })
            .catch((err) => console.log(err));
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get('/thunder', async(req, res, next) => {
    const apikey = req.query.apikey;
    const text = req.query.text;
    const text2 = req.query.text2;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text) return res.json(msgHandler.nottext1)
    if(!text2) return res.json(msgHandler.nottext2)
    
    if(listkey.includes(apikey)){
        zrapi.textpro("https://textpro.me/thunder-text-effect-online-881.html", [text])
            .then((data) => {
                res.json({
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: data
                })
            })
            .catch((err) => console.log(err));
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get('/black-pink', async(req, res, next) => {
    const apikey = req.query.apikey;  
    const text = req.query.text;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text) return res.json(msgHandler.nottext1)
    
    if(listkey.includes(apikey)){
        zrapi.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text])
            .then((data) => {
                res.json({
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: data
                })
            })
            .catch((err) => console.log(err));
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get('/drop-water', async(req, res, next) => {
    const apikey = req.query.apikey;
    const text = req.query.text;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text) return res.json(msgHandler.nottext1)
    
    if(listkey.includes(apikey)){
        zrapi.textpro("https://textpro.me/dropwater-text-effect-872.html", [text])
            .then((data) => {
                res.json({
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: data
                })
            })
            .catch((err) => console.log(err));
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get('/christmas', async(req, res, next) => {
    const apikey = req.query.apikey;
    const text = req.query.text;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text) return res.json(msgHandler.nottext1)
    
    if(listkey.includes(apikey)){
        zrapi.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [text])
            .then((data) => {
                res.json({
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: data
                })
            })
            .catch((err) => console.log(err));
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get('/3d-gradient', async(req, res, next) => {
    const apikey = req.query.apikey;
    const text = req.query.text;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text) return res.json(msgHandler.nottext1)
    
    if(listkey.includes(apikey)){
        zrapi.textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [text])
            .then((data) => {
                res.json({
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: data
                })
            })
            .catch((err) => console.log(err));
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get('/pornhub', async(req, res, next) => {
    const apikey = req.query.apikey;
    const text = req.query.text;
    const text2 = req.query.text2;
    
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text) return res.json(msgHandler.nottext1)
    if(!text2) return res.json(msgHandler.nottext2)
    
    if(listkey.includes(apikey)){
    zrapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [text, text2])
        .then((data) => {
            res.json({
                status: true,
                code: 200,
                creator: `${creator}`,
                result: data
            })
        })
        .catch((err) => console.log(err));
    } else {
        res.json(msgHandler.invalidKey)
    }
});

module.exports = router