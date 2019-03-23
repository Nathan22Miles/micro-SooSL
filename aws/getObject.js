const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.MICRO_SOOSL_ACCESS_KEY,
        secretAccessKey: process.env.MICRO_SOOSL_SECRET_ACCESS_KEY,
    }
})

const bucketName = 'micro-soosl-nlm-hostingbucket-dev'
const keyName = 'index.html'

const objectParams = {Bucket: bucketName, Key: keyName}

const promise = new AWS.S3({apiVersion: '2006-03-01'}).getObject(objectParams).promise()

promise
    .then(result => console.log('done', result))
    .catch(err => console.log('ERROR', err))
