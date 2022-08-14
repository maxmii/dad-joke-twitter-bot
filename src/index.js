const { tweet } = require('./twitterClient')
const runCronJob = require('./cronJob')

runCronJob('0 14 * * *')