const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.MICRO_SOOSL_ACCESS_KEY,
        secretAccessKey: process.env.MICRO_SOOSL_SECRET_ACCESS_KEY,
    }
})

const bucketName = 'micro-soosl-nlm-hostingbucket-dev'
const keyName = 'hello_world.txt'

const objectParams = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'}

const uploadPromise = new AWS.S3().putObject(objectParams).promise()

uploadPromise
    .then(() => console.log('done'))
    .catch(err => console.log('ERROR', err))
