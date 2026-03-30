const axios = require('axios');
const {parseString} = require('xml2js');
const util = require('util');
const { parse } = require('node-html-parser');
let DOMAIN = 'https://store.optum.com';

function logPercent (success, failed, total) {
    if (process.stdout.isTTY) {
        process.stdout.cursorTo(0);
        process.stdout.write(`success: ${success}, failed: ${failed}, total: ${total}`);
        process.stdout.clearLine(1)
    }
}
async function main() {

    const result = await axios.get(DOMAIN + '/sitemap.xml');
    const xml = await util.promisify(parseString)(result.data);
    const urls = xml.urlset.url.map(a => a.loc[0]).map(a => a.replace(DOMAIN, 'http://localhost:8000'))
    const failed = [];
    const success = []

    for (const url of urls) {
        try {
            const result = await axios.get(url);
            const root = parse(result.data);
            const meta = root.querySelector('meta[name=description]').getAttribute('content')
            success.push({meta, url})
        } catch (e) {
            failed.push({url, e})
        }
        logPercent(success.length, failed.length, urls.length)
    }
    console.log({failed, success})
    console.log(JSON.stringify(success.filter(a => !a.meta || a.meta === 'description' ).map(a => a.url)))
    console.log(JSON.stringify(success.filter(a => a.meta && a.meta !== 'description' )))
}
main();
