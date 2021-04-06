const SITE_URL = `https://vc.ru`;
const WHITE_BG = true;
const SITE_TYPE = 'url';
const RENDER_DELAY = 9000;

const FODLER_NAME = `qa`
let WIDTH
let HEIGHT
let DEVICE_NAME
let SCREENSHOT_NAME
let SCREENSHOT_PATH

//const webshot = require(`webshot`)

// Webshot
// -------

const devicePull = {
    fullHd: {
        width: 1920,
        height: 1080,
        name: `fullHD`
    },
    macbook: {
        width: 1440,
        height: 810,
        name: `macbook`
    },
    iphone678Plus: {
        width: 414,
        height: 736,
        name: `iphone-6-7-8-Plus`
    },
}

const options = {
    siteType: SITE_TYPE,

    // It's make only screenshot of the selected container.
    // It can be a class
    // captureSelector: `body`,
    screenSize: {
        width: WIDTH,
        height: HEIGHT
    },
    shotSize: {
        width: WIDTH,
        height: `all`
    },
    userAgent: `Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g`,
    defaultWhiteBackground: WHITE_BG,
    renderDelay: RENDER_DELAY,
}

//const devicesBruteForce = () => {
    for (let device in devicePull) {
        device = devicePull[device]
        for (let stat in device) {
            WIDTH = device.width
            HEIGHT = device.height
            DEVICE_NAME = device.name
            SCREENSHOT_NAME = WIDTH + `x` + HEIGHT + `-` + DEVICE_NAME
            SCREENSHOT_PATH = FODLER_NAME + `/` + SCREENSHOT_NAME
        }
        console.log(SCREENSHOT_NAME)

        webshot(SITE_URL, SCREENSHOT_PATH, options, function (err) {
            if (!err) {
                console.log(`screenshot of ` + SCREENSHOT_NAME + ` taken!`)
            }
        })
    }
    return `Screnshoting done!`
}

module.exports.devicesBruteForce = devicesBruteForce


// webshot(SITE_URL, `qa/site.jpg`, options, function (err) {
//    if (!err) {
//        console.log(`screenshot of ` + SCREENSHOT_NAME + ` taken!`)
//    }
// })
