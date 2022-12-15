const fs = require('fs');
const colors = require('colors');

const CrearArchivoTabla = async( base = 5, l, h) =>{

    try {
        console.log('===================='.america);
        console.log('tabla del '.cyan, colors.bgMagenta(base));
        console.log('===================='.america);

        let salida = '';
        let consola = '';

        for (let index = 1; index <= h; index++) {

            salida += `${base} x ${index} = ${base * index} \n`;
            consola += `${base} ${'x'.blue} ${index} ${'='.red} ${base * index} \n`;

        };

        fs.writeFileSync(`./salida/tabla-${base}`, salida );
        if ( l ) {
            console.log(consola)
        }
    } catch (error) {
        console.log(error);
    }

    return `tabla del ${base}`
};
module.exports = {
    CrearArchivoTabla,
}


