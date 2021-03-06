const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una .....', {
        descripcion
    })
    .command('listar', 'Crea una .....', {
        descripcion
    })
    .command('actualizar', 'Crea una .....', {
        descripcion,
        completado

    })
    .command('borrar', 'borra una .....', {
        descripcion
    })
    .help()
    .argv;





module.exports = {
    argv
}