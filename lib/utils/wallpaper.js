const axios = require('axios')


const alphacoders = (q, page = '1') => {
    return new Promise((resolve, reject) => {
        axios.get(`https://wall.alphacoders.com/api2.0/get.php?auth=69060f4b43240ed1155ebec8b4fa17cb&method=search&page=${page}&term=${q}`)
            .then((res) => {
                let result = res.data.wallpapers
                if(!result && res.data.total_match === '0'){
                    return reject('error')
                } 
                else if(!result){
                    resolve([])
                }
                else{
                    let wallpaper = []
                    result.forEach((item, index) => {
                        wallpaper.push(item.url_image)
                    })
                    resolve(wallpaper)
                }
            })
    })
}

const unsplash = (q) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.unsplash.com/search/photos?client_id=YXmPdnPXdKZuBrn9jrMBd30ksj0NY4ufuBcQUcfzUf4&query=${q}`)
            .then(async (res) => {
                let unsplash = res.data.results
                let result = []
                unsplash.forEach((item, index)=>{
                    result.push({
                        small: item.urls.small,
                        regular: item.urls.regular,
                        full: item.urls.full
                    })
                })
                resolve(result)
            })
            .catch((err) => {
                return reject(err)
            })
    })
}


module.exports = {alphacoders, unsplash}