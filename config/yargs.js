const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias:'listar',
        type: 'boolean',
        default:false,
        describe: 'muestra el resultado de la multiplicacion'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption: true,
        describe: 'limita el numero de veces que quieras multiplicar la base'
    })
    .check( (argv, options) => {
        if( isNaN(argv.b) ){
            throw 'la base debe ser un numero'
        }
        return true
    })
    .argv;
module.exports = argv;
