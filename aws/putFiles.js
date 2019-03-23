const AWS = require('aws-sdk')
const fs = require('fs')
const fsp = fs.promises
const path = require('path')

AWS.config.update({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.MICRO_SOOSL_ACCESS_KEY,
        secretAccessKey: process.env.MICRO_SOOSL_SECRET_ACCESS_KEY,
    }
})

const bucketName = 'micro-soosl-nlm-hostingbucket-dev'

const contentTypes = [
    ["bmp", "image/bmp"],
    ["css", "text/css"],
    ["csv", "text/csv"],
    ["gif", "image/gif"],
    ["htm", "text/html"],
    ["html", "text/html"],
    ["ico", "image/vnd"],
    ["jpeg", "image/jpeg"],
    ["jpg", "image/jpeg"],
    ["js", "text/javascript"],
    ["json", "application/json"],
    ["mp4", "video/mp4"],
    ["png", "image/png"],
    ["svg", "image/svg"],
    ["txt", "text/plain"],
    ["webm", "video/webm"]
]

function getContentType(_path) {
    let matches = contentTypes.filter(x => _path.toLowerCase().endsWith('.' + x[0]))
    if (matches.length === 0) {
        console.log('===OOPS', _path)
        return 'text/plain'
    }
    return matches[0][1]
}

async function upload(_path) {
    const keyName = _path.slice(9)
    console.log(keyName)

    const file = fs.createReadStream(_path)
    const objectParams = {
        Bucket: bucketName, 
        Key: keyName, 
        Body: file,
        ContentType: getContentType(_path)
    }

    const uploadPromise = new AWS.S3().putObject(objectParams).promise()
    await uploadPromise
}

async function walkDir(dir, asyncFun) {
    let paths = await fsp.readdir(dir)
    
    for (let i=0; i<paths.length; ++i) {
        let _path = paths[i]
        let dirPath = path.join(dir, _path)
        
        if (fs.statSync(dirPath).isDirectory()) {
            await walkDir(dirPath, asyncFun)
        } else {
            await asyncFun(path.join(dir, _path));
        }
    }
}

walkDir('../build', upload)
    .then(() => console.log('done'))
