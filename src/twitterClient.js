const { TwitterApi } = require("twitter-api-v2")
require("dotenv").config()
const { fetchJokes, makeJoke } = require('./jokes')


const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
})

const rwClient = client.readWrite


const tweet = async () => {
  const dadJoke = await makeJoke()
  console.log(dadJoke)
  try {
    await rwClient.v2.tweet(dadJoke)
    console.log('tweet successfully created')
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  tweet,
  rwClient
}