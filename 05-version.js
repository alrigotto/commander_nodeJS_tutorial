const program = require('commander');

//padrão para mostrar a versão do programa
// program.version('0.0.1');
//versão personalizada
program.version('0.0.7', '-v, --vers', 'output the current version');


program.parse(process.argv);

//metodo pra mostra a versão do programa