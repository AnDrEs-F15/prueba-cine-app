import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CardMovie = () => {
  return (
    <>
      <Box component={"li"} >
        
            <Box component={"img"} 
            src='https://i0.wp.com/dili-up.com/wp-content/uploads/2019/10/El-caballero-templario-01.jpg?w=1492&ssl=1' width={300}  />
      </Box>
    </>
  )
}

export default CardMovie
