
import chalk from "chalk";
import figlet from "figlet";
import greet from "./greet.js";

// greet...

const styledMessage = chalk.bgGreenBright.black(greet("Xola"))
console.log(styledMessage);



// hello world...

console.log(chalk.blue("Hello World..."));

// SET the console.log inside the log variable
const log = console.log;

// then use the log() function that uses console.log
log(chalk.blue("Hello") + " Wor" + chalk.blue(" ld") + chalk.red("..."));


// logging hello world...

figlet("Hello world", (err, data) => {

    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});