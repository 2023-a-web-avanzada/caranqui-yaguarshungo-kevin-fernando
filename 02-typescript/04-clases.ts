//Clases
class Persona{
    public nombre:string;
    public apellido: string; 
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido = ''; //Duck typing -> string

    constructor(
        nombreParametro:string,
        apellidoParametro: string,
    ){
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }

    private mostrarNombreApellido():string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro:string, //Parámetros del constructor
        apellidoParametro: string, //Parámetros del constructor
        public cedula: string, //Modificador de acceso -> Propiedad de la clase
        public estadoCivil: string, //Modificador de acceso -> Propiedad de la clase
    ){
        super(nombreParametro, apellidoParametro);
        this.cedula;
        this.estadoCivil;
    }
}
const kevin =  new Usuario(
    'Kevin', 
    'Caranqui',
    '1751653385',
    'soltero'
);
kevin.nombre;
kevin.apellido;
kevin.cedula;
kevin.estadoCivil;
