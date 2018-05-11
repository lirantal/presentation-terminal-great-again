#!/usr/bin/env node

// console.log('hi jsheroes')
// const argv = process.argv
// console.log(argv)

const yargs = require("yargs");
const args = yargs
  .version()
  .help()
  .option("category")
  .alias("category", "c")
  .demandOption("category")
  .default("category", "dev")
  .example("chucky --category dev")
  .epilogue("(C) just having fun here with the heroes").argv;

async function loadAssets() {
  const ora = require("ora")();

  ora.start("loading chuck norris to the matrix");
  await new Promise(resolve => setTimeout(resolve, 500));
  ora.succeed("chuck norris doesnt say thanks");
}

function loadVerboseAssets() {
  const Listr = require("listr");
  const tasks = new Listr([
    {
      title: "instantiating a new chuck norris body",
      task: () => new Promise(resolve => setTimeout(resolve, 500))
    }
  ]);

  return tasks.run();
}

function promptJokeStatus() {
  const inquire = require("inquirer");

  return inquire.prompt([
    {
      type: "confirm",
      name: "chucknorris jokes",
      message: "was the joke funny?"
    }
  ]);
}

async function getJoke() {
  const Chuck = require("chucknorris-io");
  const chucknorris = new Chuck();

  const joke = await chucknorris.getRandomJoke(args.category);
  return joke.value;
}

async function cliMagic() {
  // @TODO load assets
  const chalk = require("chalk");

  await loadAssets();
  await loadVerboseAssets();
  const joke = await getJoke();
  console.log(chalk.black.bgGreen(joke));

  await promptJokeStatus();
  // return Promise.reject('noop')
}

cliMagic().catch(err => {
  console.error("error: ", err);
  process.exit(1);
});
