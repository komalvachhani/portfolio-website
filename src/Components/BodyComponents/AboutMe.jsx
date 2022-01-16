import React from 'react'
import { Box } from '@material-ui/core'
import { useStyles } from './BodyStyles'

export default function AboutMe() {
    const classes = useStyles;
    return (
        <Box className={classes.Section}>
            <h1>about section testing</h1>
        </Box>
    );
}
