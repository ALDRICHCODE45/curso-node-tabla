const { CrearArchivoTabla } =  require('./helpers/multiplicar');
const argv = require('./config/yargs')
console.clear();


// const [,,base = 'base=5'] = process.argv
// const [,numero] = base.split('=')

CrearArchivoTabla(argv.b, argv.l, argv.h)
    .then(archivo => console.log(`${archivo.rainbow} creado`))
    .catch(err => console.log(err));
