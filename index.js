import axios from 'axios'
const poll = 12075676
const pick = 54826309
const heads = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.34',
    'Referer': 'https://www.ecosdelcombeima.com/'
}
const magic_url = `https://poll.fm/n/197a44d0c866efef4057098a50477120/${poll}`
let magic_data
const vote_url = 'https://polls.polldaddy.com/vote-js.php'

const vote = async () => {
    await axios.get(`${magic_url}?${Math.floor(Date.now() / 1000)}`, {
        headers: heads
    }).then(res => {
        magic_data = String(res.data).split(";")[0].split('=')[1]
        magic_data = magic_data.substring(1, magic_data.length - 1)
    })

    await axios.get(`${vote_url}?p=${poll}&b=2&a=${pick},0=&va=16&n=${magic_data}&cookie=0&url=${heads.Referer}&tags=${'12075676-src:poll-embed'}`, {
        headers: {...heads, 'Authority': 'polls.polldaddy.com'}
    }).then(res => console.log(magic_data, res.data, '\n\n\n\n\n\n'))
}
setInterval(() => {
    vote()
}, 5000);