import { Box, Button } from '@mui/material'
import React from 'react'
import ModalApp from '../../../components/ModalApp'
import { useMovieAction } from '../hooks/useMovieActions'
import ClientForm from './ClientForm'
import BookingForm from './BookingForm'

const MovieActions = () => {
    const { open, setOpen, InputFieldAlert } = useMovieAction();
    return (
        <>
            <Box m={1} display={"flex"} gap={2} sx={{ direction: "rtl" }} >
                <Button variant='contained' onClick={() => setOpen(true)} >Reservar</Button>
                <Button variant='outlined' onClick={() => InputFieldAlert()} >Ver reservas</Button>
                <ModalApp
                    title={"Reservar"}
                    handleOpen={open}
                    setOpen={setOpen}
                >
                    <Box m={1} >
                        {/* <ClientForm /> */}
                        <BookingForm />
                    </Box>
                </ModalApp>
            </Box>
        </>
    )
}

export default MovieActions
