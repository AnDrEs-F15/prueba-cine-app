import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MovieContext } from "../context/MovieContext";
import { getByMovieId } from "../../../services/appServices";

export const useFetchBooking = () => {
    const [movieData, setMovieData] = useState([]);
    const {movie} = useParams();
    console.log(movie);
    useEffect(()=> {
        getByMovieId(movie)
            .then(response => setMovieData(response?.data) )
    }, [movie])

    return{
        movieData
    }
}