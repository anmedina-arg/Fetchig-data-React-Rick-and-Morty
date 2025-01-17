import '../App.css'
import { useEffect, useState } from 'react'

/* 
Este archivo es el resultado final luego de acomodar el codigo, pero dejaré comentarios explicando cómo llegamos hasta aquí
*/

/*
en la línea siguiente hemos extraido la funcion asincrona, fuera del componente, esto también es una buena práctica, dejar el componente
lo "más limpio" posible, en estos ejemplos puede resultar insignificante, pero en componente más grandes o complejos, ayuda mucho!!!

Fíjense que la funcion 'getData' recibe por parámetros las funciones setter!! (setPersonajes y setMyError). Si no recibiera estos parámetros,
la función reconocerá como "undefined" las líneas que involucran: setPersonajes y setMyError.
*/
async function getData(page, setPersonajes, setMyError) {
        try {
			const response = await fetch(`https://rickandmortyapi.com/api/characterAAAA/?page=${page}`);
			console.log(response) // <-- recuereden que aquí consologueamos response para ver qué era, abajo el console.log
			/*
			{
				body:(...)
				bodyUsed:true
				headers:Headers {}
				ok:true 				<-- Esta info nos sirve un montón
				redirected:false
				status:200				<-- Esta info nos sirve un montón
				statusText:""
				type:"cors"
				url:"https://rickandmortyapi.com/api/character/?page=1"
			}
			
			Si escribo mal la URL (endpoint) - En este caso lo hice intencional, pero en aplicaciones reales puede ser un error comun
			URL: mal escrita (tiene unas cuantas A que no van): https://rickandmortyapi.com/api/characterAAAA/?page=${page}
			{
				body:(...)
				bodyUsed:false
				headers:Headers {}
				ok:false 				<-- Esta info nos sirve un montón CAMBIÓ
				redirected:false
				status:404				<-- Esta info nos sirve un montón CAMBIÓ
				statusText:""
				type:"cors"
				url:"https://rickandmortyapi.com/api/character/?page=1"
			}
			*/
            if (!response.ok) { // uso la propiedad ok del objeto response, si response.ok=false, al negarlo, con el (!), se hace true y entra en el if statement
                throw new Error(`hubo un error en la consulta a la API! - Status: ${response.status}`); // asi se lanza un error
			}
			// si response.ok = true, al negarlo se hace false, no entra al if, entonces pasa a definir la constante "resData"
			const resData = await response.json();
            if (resData.results) {
                setPersonajes(resData.results); // si hay info en resData.results, utiliza el setter para setear los personajes
            } else {
                throw new Error("No results found in API response (aqui pueden poner su mensaje)"); // si resData.results no tiene info, tira un error. "el texto del error lo pueden escribir uds, es solo un string"
            }
        } catch (error) { // aqui maneja otro tipos de errores, no si la URL estuvo mal o no...
            console.error("Error fetching data:", error);
            setMyError(error.message); // Guarda el mensaje del error
        }
    }

const MainCards = () => {
    console.log("renderiza solo la carta");
    const [personajes, setPersonajes] = useState([]);
    const [page, setPage] = useState(1); // usamos un estado para hacer un paginado, en este caso podemos porque la API viene paginada desde el backend
    const [myError, setMyError] = useState("");

    useEffect(() => {
        getData(page, setPersonajes, setMyError);
    }, [page]);

    return (
        <>
            <h1>pagina: {page}</h1>
            
			<button onClick={() => setPage(page + 1)}>Cambiar de pagina</button>
            
			{myError && <p style={{ color: 'red' }}>Error: {myError}</p>}
            
			<div className="container">
                {personajes.length > 0 ? (
                    personajes.map((character) => (
                        <CharacterCard key={character.id} name={character.name} imagen={character.image} />
                    ))
                ) : (
                    !myError && <p>Cargando personajes...</p>
                )}
            </div>
        </>
    );
};

const CharacterCard = ({ name, imagen }) => {
    return (
        <>
            <h3>{name}</h3>
            <img src={imagen} alt={`foto del personaje ${name}`} />
        </>
    );
};

export default MainCards;
