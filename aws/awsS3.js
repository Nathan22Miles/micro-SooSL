const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.MICRO_SOOSL_ACCESS_KEY,
        secretAccessKey: process.env.MICRO_SOOSL_SECRET_ACCESS_KEY,
    }
})

const awsS3 = new AWS.S3()

exports.awsS3 = awsS3
