//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');


const todo = require('./todo/todo');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = todo.crear(argv.descripcion);
        break;
    case 'listar':
        let listado = todo.getListado();
        for (let tarea of listado) {
            console.log('========To Do======='.blue);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('====================='.blue);
        }
        break;
    case 'actualizar':
        let actualizado = todo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = todo.borrar(argv.descripcion);
        console.log('Se borro la tarea', borrado);
        break;
    default:
        console.log('comando no es reconocido');

}