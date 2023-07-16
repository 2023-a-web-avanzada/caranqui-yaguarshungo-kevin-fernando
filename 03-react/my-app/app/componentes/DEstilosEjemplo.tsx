'use client'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import CStyles from './c_estilos.module.css'
const pinkStyle = css`
    color: pink;
`
const Titulo = styled.h1`
    color: orange;
    font-size: 9px;
`
const TituloVerde = styled.h2`
    color: green;
    font-size: 8px;
`
export default function DEstilosEjemplo(){
    const misEstilos = {
        color: '#000000',
        backgroundColor: 'white',
        borderBottom: '5px solid yellow',
    }
    return(
        <>
            <Titulo>Titulo 1</Titulo>
            <TituloVerde>Titulo 2</TituloVerde>
            <p className={CStyles.rojo}>
                Clase rojo
            </p>
            <div css = {pinkStyle}>
                Texto Pink
            </div>
            <p style={misEstilos} >Mis Estilos</p>
            <p style={
                {
                    color: 'red',
                    backgroundColor: 'green',
                    borderBottom: '5px solid yar'
                }
            }>
                Mis estilos directo
            </p>
        </>
    )
}