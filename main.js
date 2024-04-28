#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to 'CodeWithSawera' - Currency Convertor\n"));
// define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1,
    "JYP": 113,
    "PKR": 279.09,
    "AUD": 1.65,
    "EUR": 0.9,
    "CAD": 1.3,
    // Add more currencies and their exchange rates here
};
// promt the user to select currencies from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from",
        choices: ["USD", "JYP", "PKR", "AUD", "EUR", "CAD"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "JYP", "PKR", "AUD", "EUR", "CAD"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert"
    }
]);
// perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
