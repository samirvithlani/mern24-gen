import { Box, Grid } from '@mui/material'
import React from 'react'

export const MuiLayout = () => {
  return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={8} lg={8} xl={8} md={8} sx={{backgroundColor:"blue",minHeight:"400px"}}>1</Grid>
            <Grid item xs={12} sm={4} lg={4} xl={4} md={4}  sx={{backgroundColor:"pink",minHeight:"400px"}}>2</Grid>
            <Grid item xs={3} sx={{backgroundColor:"red",height:"400"}}>1</Grid>
            <Grid item xs={3} sx={{backgroundColor:"white",height:"400"}}>2</Grid>
            <Grid item xs={3} sx={{backgroundColor:"black",height:"400"}}>1</Grid>
            <Grid item xs={3} sx={{backgroundColor:"pink",height:"400"}}>2</Grid>
        </Grid>
    </Box>
  )
}
