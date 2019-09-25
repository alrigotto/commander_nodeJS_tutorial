const program = require('commander');

program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    //presunto é o valor padrão se não for colocado nada como parametro
    .option('-p, --pizza-type <type>', 'flavour of pizza', 'presunto')
    .option('-a, --andre', 'teste do André Rigotto')
    //chedar é o valor padrão se não for colocado nada como parametro
    .option('-c, --cheese <type>', 'add the specified type of cheese', 'chedar');

program.parse(process.argv);

if(program.andre) console.log('testando...')
if (program.debug) console.log(program.opts());
console.log('pizza details:');
if (program.small) console.log('- small pizza size');
if (program.pizzaType) console.log(`- ${program.pizzaType}`);
if (program.cheese) console.log(`- cheese: ${program.cheese}`);