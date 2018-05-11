#!/usr/bin/env node
const yargs = require("yargs");
// console.log(yargs.argv)

// @TODO - you can parse arguments by yourself
// console.log(process.argv)

// @TODO - yargs will do its best to parse it for you
// @TODO - we automatically get --version and --help
// const args = yargs.argv
// console.log(args)

const args = yargs
  .version()
  .help()
  .alias("help", "h")
  .command("install <moduleName>")
  .option("category")
  .default("category", "dev")
  .demandOption(["category"])
  .alias("category", "c")
  .example("chucky --category dev")
  .epilogue("(c) 2018 the wonderful JSHeroes").argv;
// console.log(args)

const assets = require("../src/assets");
// async function loadingAssets () {
//   const loader = require('ora')()
//   loader.start('loading')
//   await new Promise(resolve => setTimeout(resolve, 1000))
//   loader.succeed('ready')
// }

const assetsVerbose = require("../src/assetsVerbose");
// function loadingAssetsVerbose () {
//   const Listr = require('listr')
//   const tasks = new Listr([
//     {
//       title: 'fetch something1',
//       task: () => new Promise(resolve => setTimeout(resolve, 1000))
//     },
//     {
//       title: 'fetch something1',
//       task: () => new Promise(resolve => setTimeout(resolve, 1000))
//       // task: () => Promise.reject(new Error('nopenope'))
//     }
//   ])
//   return tasks.run()
// }

const getJoke = require("../src/jokes");
// async function getJoke (category) {
//   const Chuck = require('chucknorris-io')
//   const chuckJokes = new Chuck()
//   const joke = await chuckJokes.getRandomJoke(category)
//   return joke.value
// }

const prompt = require("../src/prompt");
// function inquire () {
//   const inquirer = require('inquirer')
//   return inquirer.prompt([
//     {
//       type: 'confirm',
//       name: 'funny',
//       message: 'was chuck norris funny?'
//     }
//   ])
// }

async function processCommand() {
  const chalk = require("chalk");
  // @TODO load assets
  await assets();

  // @TODO load more assets
  await assetsVerbose();

  // @TODO show a joke and color it
  const joke = await getJoke(args.category);
  console.log(chalk.black.bgGreen(joke));

  // @TODO was it funny ?
  const reply = await prompt();
}

processCommand().catch(error => {
  const chalk = require("chalk");
  console.error(chalk.red("something went wrong, sorry dude"));
  console.error(error);
  process.exit(1);
});

// async function processCommand () {
//   // load assets
//   // load more assets
//   // show a joke
//   // color the joke
//   // was it funny?
//   // throw new Error('something went wrong')
// }

// processCommand().catch(error => {
//   console.log(error.message)
// })
