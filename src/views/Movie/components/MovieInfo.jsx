import { Box, Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React, { useContext } from 'react'
import MovieContent from './MovieContent'
import { MovieContext } from '../context/MovieContext'
import { useFetchBooking } from '../hooks/useFetchBooking'

const MovieInfo = () => {
    const {movieData} = useFetchBooking();
    return (
        <>
            <Box display={"flex"} flexDirection={{ md: "row-reverse", sm: "column", xs: "column" }} gap={4} justifyContent={"center"}  >
                <Card sx={{ width:"100%"  , maxWidth: {md:450 , sm: "100%", xs: "100%"} ,  height:"100%" }}  >
                    <CardMedia
                        component={"img"}
                        height={350}
                        image={movieData?.url}
                    />
                </Card>
                <MovieContent />

            </Box>
        </>
    )
}

export default MovieInfo