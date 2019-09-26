const program = require('commander');

program
    .command('rm <dir>')
    .option('-r, --recursive', 'Remove recursively')
    .action(function (dir, cmdObj) {
        console.log('remove ' + dir + (cmdObj.recursive ? ' recursively' : ''))
    })

    console.log('xxxxxx')

program.parse(process.argv)

//colocando option em comandos