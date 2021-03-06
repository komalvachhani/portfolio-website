import React from 'react'
import { Box, Grid, Container, Hidden, IconButton } from '@material-ui/core'
import { useStyles } from './BodyStyles'
import { RenderSectionHeading } from '../CommonComponents/CommonComponent';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
//import image from "../../images/About.jpeg"

export default function AboutMe() {
    const classes = useStyles();
    return (
        <Box className={classes.Section}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sm={5}>
                        <Box component={Hidden} xsDown>
                            <img src={process.env.PUBLIC_URL + '/About.jpeg'} alt="About Me!" className={classes.ResponsiveImage}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {RenderSectionHeading({
                            heading:"About Me!",
                            description:"Hello, my name is Komal Vachhani and I'm a first year student studying Electrical Engineering at the University of Waterloo!",
                            //alignCenter:true,
                        })}

                    <Box>
                        <IconButton color='inherit' className={classes.LinkedInLogo}>
                            <LinkedInIcon></LinkedInIcon>
                        </IconButton>
                    </Box>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
