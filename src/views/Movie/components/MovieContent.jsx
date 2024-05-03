import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ModalApp from '../../../components/ModalApp';
import MovieActions from './MovieActions';
import { useFetchBooking } from '../hooks/useFetchBooking';

const MovieContent = () => {
    const {movieData} = useFetchBooking();
    return (
        <>
            <Box  width={{ md: "40%", sm: "100%", xs: "100%" }} p={2} sx={{ color: "gray" }} alignContent={"center"} >
                <Typography variant='h6' fontWeight={"bold"}  >Titulo:{movieData.title}</Typography>
                <Typography variant='subtitle1' fontWeight={"bold"}  >Sinopsis:</Typography>
                <Typography variant='caption' >{movieData?.synopsis}</Typography>
                <Typography variant='subtitle1' fontWeight={"bold"}  >Directo: </Typography>
                <Typography variant='caption'   >{movieData?.director}</Typography>
                <Typography variant='subtitle1' fontWeight={"bold"}  >Fecha de lanzamiento</Typography>
                <Typography variant='caption'   >{movieData?.release}</Typography>
                
                <MovieActions />
            </Box>

        </>
    )
}

export default MovieContent