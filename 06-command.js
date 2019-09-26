const program = require('commander');

// Command implemented using action handler (description is supplied separately to `.command`)
// Returns new command for configuring.
program
    .command('clone <source> [destination]')
    .description('clone a repository into a newly created directory')
    .action((source, destination) => {
        console.log(`clone command called ${source} e ${destination}`);
    });

// Command implemented using separate executable file (description is second parameter to `.command`)
// Returns top-level command for adding more commands.
program
    .command('start <service>', 'start named service')
    .command('stop [service]', 'stop named service, or all if no name supplied');

    program.parse(process.argv);

    // aqui implenta comandos 