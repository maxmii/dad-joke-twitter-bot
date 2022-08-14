const CronJob = require('cron')
const tweet = require('./twitterClient')

const runCronJob = (time) => {
  cronJob = new CronJob(time, () => {
    console.log('Cron job starting')
    tweet()
  })
  cronJob.start()
}

module.export = runCronJob
