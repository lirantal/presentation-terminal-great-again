module.exports = async function (category = '') {
  const ChuckApi = require('chucknorris-io')
  const chuckJokes = new ChuckApi()

  const joke = await chuckJokes.getRandomJoke(category)
  return joke.value
}
