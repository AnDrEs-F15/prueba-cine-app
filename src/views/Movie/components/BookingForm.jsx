import { Autocomplete, Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { useBooking } from '../hooks/useBooking'
import { useParams } from 'react-router-dom'

const BookingForm = () => {
 

    const { bookingInput , room ,schedule,handleChange,scheduleData } = useBooking();
    console.log(scheduleData);
    return (
        <>
            <Grid
                component={"form"}
                container
                margin={"auto"}
                display="grid"
                gridTemplateColumns={{ sm: "1fr", sx: "1fr", md: "1fr 1fr" }}
                gap={1}
                onSubmit={() => console.log("Submit")}
                width={{ sm: "90%", xs: "90%", md: "80%" }}
            >
                {
                    bookingInput.map((field) => (
                        <Grid
                            key={field.name}
                            style={{ gridColumn: field?.fullWidth }}
                        >
                            <TextField
                                autoFocus={field.autoFocus}
                                id={field.name}
                                label={field.label}
                                name={field.name}
                                type={field.type}
                                fullWidth

                            />
                        </Grid>
                    ))
                }
                <Grid  gap={1} style={{ gridColumn: "span 2" }}  >
                    <Select 
                        sx={{width:"100%"}}
                        label={"Sala"}
                        value={scheduleData.room}
                        onChange={handleChange}
                        name='room'
                    >
                        {
                            room?.map (item => (
                                <MenuItem value={item.id}  defaultValue={item.id} > {item.name} </MenuItem>
                            ))
                        }
                    </Select>
                </Grid>
                <Grid  gap={1} style={{ gridColumn: "span 2" }}  >
                    <Select sx={{width:"100%"}}
                        label={"Horario"}
                        value={scheduleData?.schedule}
                        onChange={handleChange}
                        name='schedule'
                    >
                        {
                        schedule?
                            schedule?.map (item => (
                                <MenuItem key={item.id} value={item.id} defaultValue={item.id} >  Desde {item.hourStart}:00 pm a {item.hourEnd}:00 pm </MenuItem>
                            ))
                        : ""
                        }
                    </Select>
                </Grid>
    
                <Grid style={{ gridColumn: "span 2" }} >
                    <Button
                        variant='contained'
                        fullWidth
                        type='submit'
                    >
                        Siguiente
                    </Button>

                </Grid>
            </Grid>
        </>
    )
}

export default BookingForm
