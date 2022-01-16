import React from 'react'
import { AppBar,Box,Toolbar,Typography,Button, Hidden, IconButton } from '@material-ui/core'
import { useStyles } from './HeaderStyles'
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';

export default function Navbar() {
    const classes = useStyles();
    const navlinks = [
        {label:"About",Id:"About"},
        {label:"Experience",Id:"Experience"},
        {label:"Projects",Id:"Projects"},
        {label:"Skills",Id:"Skills"},
        {label:"Contact",Id:"Contact"},
    ]
    return (
        <AppBar position="fixed" className={classes.Navbar}>
            <Toolbar className={classes.Toolbar}>
                <Typography variant="h5" component="h6">
                    {"< Komal Vachhani />"}
                </Typography>
            
            {/* navlinks + fully responsive navbar */}
            <Box component={Hidden} xsDown>
                <Box>
                    {navlinks.map((item,i) => (
                        <Button className={classes.Navlinks}>{item.label}</Button>
                    ))}
                </Box>
            </Box>
            <Box component={Hidden} smUp>
                <IconButton color="inherit" onClick={() => console.log("menu clicked")}>
                    <MenuOpenRoundedIcon/>
                </IconButton>
            </Box>
        </Toolbar>
      </AppBar>
    )
}