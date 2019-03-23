const AWS = require('aws-sdk')
const fs = require('fs')

AWS.config.update({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.MICRO_SOOSL_ACCESS_KEY,
        secretAccessKey: process.env.MICRO_SOOSL_SECRET_ACCESS_KEY,
    }
})

async function test() {

}

const bucketName = 'micro-soosl-nlm-hostingbucket-dev'
const keyName = 'putFile.js'

const file = fs.createReadStream('./putFile.js')
const objectParams = {Bucket: bucketName, Key: keyName, Body: file}

const uploadPromise = new AWS.S3().putObject(objectParams).promise()

uploadPromise
    .then(() => console.log('done'))
    .catch(err => console.log('ERROR', err))
