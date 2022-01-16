import { makeStyles } from "@material-ui/core";
import { Theme } from "../HeaderComponents/Theme";

//const theme = createTheme;

export const useStyles = makeStyles((theme) => ({
    Section:{
        backgroundColor:Theme.colors.primary,
        padding: theme.spacing(10,0,8,0),
    },

    DividerLine:{
        width:"65px",
        height:"4px",
        backgroundColor:Theme.colors.primary1,
        margin:theme.spacing(2,0),
    },

    ResponsiveImage:{
        width:"100%",
        height:"auto",
    },

    SectionHeadingContainer:{
        padding:theme.spacing(2),
        color:Theme.colors.primary1,
    },

    SectionHeading:{
        color:Theme.colors.primary1,
        margin:theme.spacing(1,0),
    },

    SectionDescription:{
        paddingTop:"10px",
    },

}))