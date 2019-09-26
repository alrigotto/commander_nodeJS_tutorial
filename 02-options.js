const program = require('commander');

program
    .option('--no-sauce', 'Remove sauce')
    // .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
    .option('--no-cheese', 'plain with no cheese')
    .parse(process.argv);


console.log(program.sauce);
console.log(program.cheese);
const sauceStr = program.sauce ? 'sauce' : 'no sauce';

const cheeseStr = (program.cheese === false) ? 'no cheese' : `${program.cheese} cheese`;
console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr}`);

//Aqui não ficou claro, o script não funcionou como no exemplo do readme do commander.