import { Box } from '@mui/material';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import MovieInfo from './components/MovieInfo';
import { MovieContentProvider, MovieContext } from './context/MovieContext';
import { useFetchBooking } from './hooks/useFetchBooking';

const MovieDetail = () => {
  return (
    <>
      <MovieContext.Provider>
        <Box display={"flex"} gap={2} width={"100%"} bgcolor={"0B0B17"} height={"80vh"} alignItems={"center"} alignContent={"center"} justifyContent={"center"}   >
          <Box><MovieInfo /></Box>
        </Box>
      </MovieContext.Provider>
    </>
  )
}

export default MovieDetail