//02-interfaces
export class A implements B{
    edad = 1;
    nombre = "a"
}

// alas interfaces se le escriben de la siguiente forma
export interface B{
    nombre: string;
    edad: number;
}

export type C = { //tipos de datos
    nombre:string,
    edad: number;
}
//si no vamos a implemnetar entonces exportamos los tipos de datos 
type Usuario ={
    nombre: string;
    apellido: string;
    edad?: number | undefined;// con ? decimos que es undefined
    sueldo?: number; //opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'BN' | 'IN'
    //funciones
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuestp: number) => number;
    estadoActuadl?: () =>'AP' | 'AF' | 'AT';
}
let user:Usuario = {
    nombre: 'Kevin',
    apellido: 'Caranqui',
    casado : 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario:(mensaje) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: impuesto =>{
        return user.sueldo + user.sueldo * impuesto;
    },
    estadoActuadl: () => {
        switch (user.casado) {
            case 'AC':
                return 'AP',
            case 'IN': 
                return 'AF',
            case 'BN' :
                return 'AT'
        }
    }
}