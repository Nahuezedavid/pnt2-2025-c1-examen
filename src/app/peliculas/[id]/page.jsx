'use client';

import { useParams } from "next/navigation";
import { useState, useEffect } from 'react';

export default function DetallePelicula({}){
    const {id} = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        fetch(`https://mflixbackend.azurewebsites.net/api/movies/${id}`)
        .then((response) => response.json())
        .then(setMovie);

    }, [id]);

    if (!movie) return <p>Cargando detalle...</p>;

    return(
        <div className="p-6">
            <h1>{movie.title}</h1>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.year}</p>
            <p>{movie.fullplot}</p>
        </div>

    );
}