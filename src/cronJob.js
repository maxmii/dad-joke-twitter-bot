const CronJob = require('cron').CronJob
const { tweet } = require('./twitterClient')

const runCronJob = (time) => {
  cronJob = new CronJob(
    time,
    () => {
      console.log('Cron job starting')
      tweet()
    },
    null,
    true
  )
  cronJob.start()
  console.log('Cronjob complete')
}

module.exports = {
  runCronJob,
}
