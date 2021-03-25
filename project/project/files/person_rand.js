
 const https = require('https')

  const url = new URL('https://randomuser.me/api?results=10&seed=abc')

const req = https.request(url, (res) => {
    console.log('statusCode', res.statusCode);
    res.on('data', (d) => {
        //console.log(d);
        process.stdout.write(d)[ Math.floor(Math.random() * (50 - 1 + 1) ) + 1];
    })
})
req.on('error', (e) => {
    console.log('error', e);
})
req.end()


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
