//
//npm init -> packge.json -> dependencias -> script

import inquirer from "inquirer";
async function main(){
    try{
        const respuesta = await inquirer.prompt([
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingresa Tu Nombre'
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingresa Tu Edad'
            }
        ]);
        console.log('Respusta', respuesta);
    }catch (e){console.error(e);}
}
main();