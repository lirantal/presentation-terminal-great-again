#!/usr/bin/env node

// const args = process.argv;
// console.log(args);

const yargs = require("yargs");
const args = yargs
  .help(true)
  .version(true)
  .option("category")
  .demandOption("category")
  .alias("category", "c")
  .default("category", "dev")
  .example("chucky --category dev")
  .epilog("(c) the wonderful heroes in cluj").argv;
// console.log(args);

async function loadAssets() {
  const ora = require("ora")();
  ora.start("loading baby chuck norrises");
  await new Promise(resolve => setTimeout(resolve, 500));
  ora.succeed("done");
}

function loadMoreAssets() {
  const Listr = require("listr");
  const tasks = new Listr([
    {
      title: "whatever needs to happen",
      task: () => new Promise(resolve => setTimeout(resolve, 500))
    }
    // {
    //   title: "something1",
    //   task: () => {
    //     throw new Error("sss");
    //   }
    // }
  ]);

  return tasks.run();
}

async function getJoke(category) {
  const Chuck = require("chucknorris-io");
  const chuckClient = new Chuck();

  const joke = await chuckClient.getRandomJoke(category);
  return joke.value;
}

function getUserFeedback() {
  const inquire = require("inquirer");
  return inquire.prompt([
    {
      type: "confirm",
      name: "feedback",
      message: "was chuck norris funny?"
    }
  ]);
}

async function cliMagic() {
  // @TODO load assets
  await loadAssets();
  // @TODO load more assets
  await loadMoreAssets();
  // @TODO get a joke
  const joke = await getJoke(args.category);
  // @TODO display the joke
  const chalk = require("chalk");
  console.log(chalk.black.bgGreen(joke));
  // @TODO get user feedback

  await getUserFeedback();
}

cliMagic().catch(err => {
  console.error("error", err);
  process.exit(-1);
});
