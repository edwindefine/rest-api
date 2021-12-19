const axios = require('axios')


const wikipedia = (q, lang) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://${lang}.wikipedia.org/api/rest_v1/page/title/${q}`)
            .then(async (res) => {
                const pageId = res.data.items[0].page_id
                if(!pageId) return reject('error')
                else{
                    let hasil = await axios.get(`https://${lang}.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${pageId}`)
                    let index = Object.keys(hasil.data.query.pages);
                    hasil = hasil.data.query.pages[index[0]]
                    resolve({
                        title: hasil.title,
                        result: hasil.extract
                    })
                }
            })
            .catch((err) => {
                return reject(err)
            })
    })
}

module.exports = {wikipedia}