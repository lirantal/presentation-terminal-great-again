module.exports = function () {
  const inquire = require('inquirer')

  return inquire.prompt([
    {
      type: 'confirm',
      name: 'funny',
      message: 'was chuck norris funny?'
    }
  ])
}
