const fetch = require('node-fetch')

const fetchJokes = async () => {
  const url = 'https://icanhazdadjoke.com/'
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }
  const res = await fetch(url, options)

  const data = res.json()
  const dadJoke = data.joke
  return data
}

const makeJoke = async () => {
  const res = await fetchJokes()
  const dadJoke = res.joke
  return dadJoke
}

module.exports = {
  fetchJokes,
  makeJoke,
}
