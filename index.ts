#! /usr/bin/env/ node

import inquirer from "inquirer";
import chalk from "chalk";

let todos = [];
let condition = true;

while (condition) {
  let addTodo = await inquirer.prompt([
    {
      message: chalk.bold.green("What do you want to add in your Todo's"),
      type: "input",
      name: "todo1",
    },
    {
      message: chalk.bold.blue("do you want to add more todo's ?"),
      type: "confirm",
      name: "todo2",
      default: "false",
    },
  ]);

  todos.push(addTodo.todo1);
  console.log(chalk.yellow("Your Ongoing Todo's"));
  condition = addTodo.todo2
  console.log(todos);


  const exitOperation = await inquirer.prompt([
      {
       message :chalk.bold.green("if you want to Exit press 'N' otherwise press 'Y'"),
      type: "confirm\n",
      name : "exitTodo"
      }
    ]);
};

console.log(chalk.bold.red(`Your todos are ready, program closed!`));

