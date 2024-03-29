

const program = require('commander');

program
    .version('0.1.0')
    .arguments('<cmd> [env]')
    .action(function (cmd, env) {
        cmdValue = cmd;
        envValue = env;
    });

program.parse(process.argv);

if (typeof cmdValue === 'undefined') {
    console.error('no command given!');
    process.exit(1);
}
console.log('command:', cmdValue);
console.log('environment:', envValue || "no environment given");

// implementa uma sintaxe de argumentos, parece um tipo
// de verificação para obrigar a colocar os argumentos corretos.