const express = require('express')

const router =  express.Router();
const __path = process.cwd()

const {
    creator,
    listkey,
    msgHandler
} = require('../message')
const {
    pShadow,
    pRomantic,
    pSmoke,
    pBurnPapper,
    pNaruto,
    pLoveMsg,
    pMsgGrass,
    pGlitch,
    pDoubleHeart,
    pCoffeCup,
    pLoveText,
    pButterfly
} = require(__path + "/lib/utils/photooxy");

router.get("/", async(req, res, next) => {
    res.sendFile(__path+'/views/api/photooxy.html');
})

router.get("/shadow", async(req, res, next) => {
    const text1 = req.query.text;
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text1) return res.json(msgHandler.nottext1)
    if(listkey.includes(apikey)){
        pShadow(text1)
            .then((data) => {
                const result = {
                status: true,
                code: 200,
                creator: `${creator}`,
                result: data.url
                }
                res.json(result)
            })
            .catch((error) => {
                res.json(error)
            });
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get("/romantic", async(req, res, next) => {
    const text1 = req.query.text;
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text1) return res.json(msgHandler.nottext1)
    if(listkey.includes(apikey)){
        pRomantic(text1)
            .then((data) => {
                const result = {
                status: true,
                code: 200,
                creator: `${creator}`,
                result: data.url
                }
                res.json(result)
            })
            .catch((error) => {
                res.json(error)
            });
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get("/smoke", async(req, res, next) => {
    const text1 = req.query.text;
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text1) return res.json(msgHandler.nottext1)
    if(listkey.includes(apikey)){
        pSmoke(text1)
            .then((data) => {
                const result = {
                status: true,
                code: 200,
                creator: `${creator}`,
                result: data.url
                }
                res.json(result)
            })
            .catch((error) => {
                res.json(error)
            });
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get("/burn-papper", async(req, res, next) => {
    const text1 = req.query.text;
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text1) return res.json(msgHandler.nottext1)
    if(listkey.includes(apikey)){
        pBurnPapper(text1)
            .then((data) => {
                const result = {
                status: true,
                code: 200,
                creator: `${creator}`,
                result: data.url
                }
                res.json(result)
            })
            .catch((error) => {
                res.json(error)
            });
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get("/naruto", async(req, res, next) => {
    const text1 = req.query.text;
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text1) return res.json(msgHandler.nottext1)
    if(listkey.includes(apikey)){
    pNaruto(text1)
        .then((data) => {
            const result = {
                status: true,
                code: 200,
                creator: `${creator}`,
                result: data.url
            }
            res.json(result)
        })
        .catch((error) => {
            res.json(error)
        });
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get("/love-message", async(req, res, next) => {
    const text1 = req.query.text;
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text1) return res.json(msgHandler.nottext1)
    if(listkey.includes(apikey)){
        pLoveMsg(text1)
            .then((data) => {
                const result = {
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: data.url
                }
                res.json(result)
            })
            .catch((error) => {
                res.json(error)
            });
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get("/message-under-grass", async(req, res, next) => {
    const text1 = req.query.text;
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text1) return res.json(msgHandler.nottext1)
    if(listkey.includes(apikey)){
        pMsgGrass(text1)
            .then((data) => {
                const result = {
                status: true,
                code: 200,
                creator: `${creator}`,
                result: data.url
                }
                res.json(result)
            })
            .catch((error) => {
                res.json(error)
            });
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get("/glitch", async(req, res, next) => {
    const text1 = req.query.text;
    const text2 = req.query.text2;
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text1) return res.json(msgHandler.nottext1)
    if(!text2) return res.json(msgHandler.nottext2)
    if(listkey.includes(apikey)){
        pGlitch(text1, text2)
            .then((data) => {
                const result = {
                    status: true,
                    code: 200,
                    creator: `${creator}`,
                    result: data.url
                }
                res.json(result)
            })
            .catch((error) => {
                res.json(error)
            });
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get("/double-heart", async(req, res, next) => {
    const text1 = req.query.text;
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text1) return res.json(msgHandler.nottext1)
    if(listkey.includes(apikey)){
        pDoubleHeart(text1)
            .then((data) => {
                const result = {
                status: true,
                code: 200,
                creator: `${creator}`,
                result: data.url
                }
                res.json(result)
            })
            .catch((error) => {
                res.json(error)
            });
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get("/coffe-cup", async(req, res, next) => {
    const text1 = req.query.text;
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text1) return res.json(msgHandler.nottext1)
    if(listkey.includes(apikey)){
        pCoffeCup(text1)
            .then((data) => {
                const result = {
                status: true,
                code: 200,
                creator: `${creator}`,
                result: data.url
                }
                res.json(result)
            })
            .catch((error) => {
                res.json(error)
            });
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get("/love-text", async(req, res, next) => {
    const text1 = req.query.text;
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text1) return res.json(msgHandler.nottext1)
    if(listkey.includes(apikey)){
        pLoveText(text1)
            .then((data) => {
                const result = {
                status: true,
                code: 200,
                creator: `${creator}`,
                result: data.url
                }
                res.json(result)
            })
            .catch((error) => {
                res.json(error)
            });
    } else {
        res.json(msgHandler.invalidKey)
    }
});
  
router.get("/butterfly", async(req, res, next) => {
    const text1 = req.query.text;
    const apikey = req.query.apikey;
    if(!apikey) return res.json(msgHandler.notparam)
    if(!text1) return res.json(msgHandler.nottext1)
    if(listkey.includes(apikey)){
        pButterfly(text1)
            .then((data) => {
                const result = {
                status: true,
                code: 200,
                creator: `${creator}`,
                result: data.url
                }
                res.json(result)
            })
            .catch((error) => {
                res.json(msgHandler.error)
            })
    } else {
        res.json(msgHandler.invalidKey)
    }
});

module.exports = router