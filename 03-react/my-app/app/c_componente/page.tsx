import CComponent from "./CComponent";

export default function page(){
    return	(
        <>
            <CComponent url={'wwww.google.com'}
            iteraciones={5}
            mostrar = {false}
            />
            <CComponent url={'wwww.youtube.com'}
                iteraciones={10}
                mostrar = {true	}
                />
            <CComponent url={'wwww.facebook.com'}
                iteraciones={5}
                mostrar = {true}
                />
                
        </>
    )
}