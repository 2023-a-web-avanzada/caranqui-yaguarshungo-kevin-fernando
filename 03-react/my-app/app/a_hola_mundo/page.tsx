//sintaxis de react
//formas de exportar un tsx
//a_hola_mundo /page.tsc

//1. gurdar el componente en una funcion
// const a_componente = function(){
//     return<></>
// }
//2. con export 
// const b_componente = ()=>{
//     return<></>
// }
// export default b_componente;
//3. la que vamos a usar
export default function pague(){
    return (
        <>
            <h1>Hola desde a_hola-mundo</h1>
        </>
    )
}