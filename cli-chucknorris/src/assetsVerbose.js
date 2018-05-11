module.exports = function () {
  const Listr = require('listr')
  const tasks = new Listr([
    {
      title: 'fetch something1',
      task: () => new Promise(resolve => setTimeout(resolve, 1000))
    },
    {
      title: 'fetch something2',
      task: () => new Promise(resolve => setTimeout(resolve, 1000))
    }
  ])

  return tasks.run()
}
