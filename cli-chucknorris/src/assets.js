module.exports = async function () {
  const loader = require('ora')()

  loader.start('loading...')
  await new Promise(resolve => setTimeout(resolve, 1000))
  loader.succeed('ready')
}
