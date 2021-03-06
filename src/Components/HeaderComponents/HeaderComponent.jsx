import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyles';
import Navbar from "./Navbar"

export default function HeaderComponent() {
    const classes = useStyles();
    return (
       <Box className={classes.HeaderWrapper}>
           <Navbar/>
           <Box className={classes.HeaderContainer}>
               <Typography variant="h5" component="h4" className={classes.IntroTitle}>
                   Hi, my name is...
                </Typography>
               <Typography variant="h3" component="h4" className={classes.HeaderTitle}>
                   Komal Vachhani.
                </Typography>
               <Typography variant="h3" component="h4" className={classes.HeaderDescription}>
                   I'm a student.
                </Typography>
            </Box>
       </Box> 
    )
}