import { url } from "inspector";

export type PropiedadesDelComponente = {
    url: string;
    iteraciones: number;
    mostrar?: boolean;
}
export default function CComponent(
    props: PropiedadesDelComponente
){
    const {url, iteraciones, mostrar} = props;
    //podemos hacer funciones dentro de nuestro componente
    const contenidoAdiconal = () =>{
        if(mostrar){
            return <p>Mostrar</p>
        } else {
            return <p>Ocultar</p>
        }
    }
    return(
        <>
            <a target="_blank" href={url}> Ir a URL</a>
            <p>Iteracion: {iteraciones}</p>
            <p> Mostar: {mostrar}</p>
            {contenidoAdiconal()}
        </>
    )
}