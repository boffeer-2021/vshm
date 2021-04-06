//const Pageres = require(`pageres`)

//const WEBSITE_URL = `http://ekaterinaschol.ru/26-tech/short.html`
const WEBSITE_URL = `http://192.168.100.7:3000/short.html`
const DEVICES_LIST = [
    //`1920x1080`,
    `1440x810`,
    //`1366x669`,
    `1024x768`,
    `768x1024`,
    `414x736`,
    `414x896`,
    `375x812`,
    `375x667`,
    //`iphone 5s`
]
const OPTIONS = {
    crop: false
}

let today = new Date
let date = `d` + today.getDate() + `-` + today.getHours() + `h-` + today.getMinutes() + `m`;

(async () => {
    await new Pageres({delay: 2})
        //.src(`https://vc.ru`, [`1920x1080`, `1440x810`, `1366x768`, `1024x768`, `iphone 5s`], {crop: true})
        .src(WEBSITE_URL, DEVICES_LIST, OPTIONS)
        .dest(`qa/` + date + `/`)
        .run()

    console.log(`Finished generating screenshots!`)
})()
