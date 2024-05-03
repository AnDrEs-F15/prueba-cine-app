import React from 'react'
import { useForm } from 'react-hook-form'
import { useClientValidations } from '../hooks/useClientValidations'
import { yupResolver } from '@hookform/resolvers/yup';
import {  Button, Grid, TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const ClientForm = () => {
    const {clientInput,schema} = useClientValidations();
    const {register , handleSubmit , formState:{errors}  } = useForm({
        resolver: yupResolver(schema)
    })
    return (
        <>
            <Grid
                component={"form"}
                container
                margin={"auto"}
                display="grid"
                gridTemplateColumns={{ sm: "1fr", sx: "1fr", md: "1fr 1fr" }}
                gap={1}
                onSubmit={handleSubmit(() =>  console.log("Submit"))}
                width={{ sm: "90%", xs: "90%", md: "80%" }}
            >
                {
                    clientInput.map((field) => (
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
                                error={errors[field.name]?.type ? true : false}
                                helperText={errors[field.name]?.message}
                                {...register(field.name, field?.validation)}
                            />

                        </Grid>
                    ))
                }
                <Grid style={{ gridColumn: "span 2" }} >
                    <Button
                        variant='contained'
                        fullWidth
                        type='submit'
                        endIcon={<ArrowForwardIcon />}
                    >
                        Siguiente
                    </Button>

                </Grid>
            </Grid>
        </>
    )
}

export default ClientForm
