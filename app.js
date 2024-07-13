#! /usr/bin/env node
// Node Packages
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.blueBright.bold.italic.underline("\n\t\tSimple Calculator\t\t\n"));
const answer = await inquirer.prompt([{
        message: chalk.magenta.italic("Write your first number: "),
        type: "number",
        name: "FirstNumber",
        validate: (input) => {
            if (isNaN(input)) {
                return `Only Enter Number`;
            }
            else if (input) {
                return true;
            }
        }
    },
    {
        message: chalk.magenta.italic("Write your second number: "),
        type: "number",
        name: "SecondNumber",
        validate: (input) => {
            if (isNaN(input)) {
                return `Only Enter number`;
            }
            else if (input) {
                return true;
            }
        }
    },
    {
        message: chalk.magenta.italic("\nSelect any one operator: "),
        type: "list",
        name: "Operator",
        choices: ["Addition(+)", "Subtraction(-)", "Multiplication(*)", "Division(/)", "Modulus(%)", "Exponent(**)"],
    }]);
//Conditions
if (answer.Operator === "Addition(+)") {
    let add = answer.FirstNumber + answer.SecondNumber;
    console.log(chalk.yellow.bold(`\n\t\t${answer.FirstNumber} + ${answer.SecondNumber}\t\t`));
    console.log(chalk.greenBright(`The addition of your number is :` + chalk.redBright(`${add}.`)));
}
else if (answer.Operator === "Subtraction(-)") {
    let sub = answer.FirstNumber - answer.SecondNumber;
    console.log(chalk.yellow.bold(`\n\t\t${answer.FirstNumber} - ${answer.SecondNumber}\t\t`));
    console.log(chalk.greenBright(`The subtraction of your number is :` + chalk.redBright(` ${sub}. `)));
}
else if (answer.Operator === "Multiplication(*)") {
    let multiple = answer.FirstNumber * answer.SecondNumber;
    console.log(chalk.yellow.bold(`\n\t\t${answer.FirstNumber} * ${answer.SecondNumber}`));
    console.log(chalk.greenBright(`The multiplication of your number is :` + chalk.redBright(`${multiple}.`)));
}
else if (answer.Operator === "Division(/)") {
    let divide = answer.FirstNumber / answer.SecondNumber;
    console.log(chalk.yellow.bold(`\n\t\t${answer.FirstNumber} / ${answer.SecondNumber}`));
    console.log(chalk.greenBright(`The Division of your number is :` + chalk.redBright(`${divide}.`)));
}
else if (answer.Operator === "Modulus(%)") {
    let module = answer.FirstNumber % answer.SecondNumber;
    console.log(chalk.yellow.bold(`\n\t\t${answer.FirstNumber} % ${answer.SecondNumber}`));
    console.log(chalk.greenBright(`The Modulus of your number is :` + chalk.redBright(`${module}.`)));
}
else if (answer.Operator === "Exponent(**)") {
    let expoent = answer.FirstNumber ** answer.SecondNumber;
    console.log(chalk.yellow.bold(`${answer.FirstNumber} ** ${answer.SecondNumber}`));
    console.log(chalk.greenBright(`The Exponent of your number is :` + chalk.redBright(`${expoent}.`)));
}
else {
    console.log("Invalid Data");
}
