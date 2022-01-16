import { makeStyles } from "@material-ui/core";
import { Theme } from "./Theme";

export const useStyles = makeStyles((theme) => ({
    HeaderWrapper:{
        width: "100%",
        //minheight: "90vh", IF YOU WANT A PIC OR VID IN THE BACKGROUND
        //height:"auto",
        height: "90vh",
        backgroundColor: Theme.colors.base1, 
    },

    HeaderContainer:{
        width: "85%",
        //minheight: "90vh",
        //height: "auto",
        height:"90vh",
        padding:"20px",
        display:"flex",
        flexFlow:"column wrap",
        justifyContent:"center",
        fontFamily:"montserrat",
        color:Theme.colors.base2,
    },

    IntroTitle:{
        fontSize:"2rem",
        fontWeight:"bold",
        margin:theme.spacing(1,0),
        textAlign:"center",
        marginLeft:"190px",
        [theme.breakpoints.down("xs")]: {
            fontSize:"1rem",
            margin:theme.spacing(1,0),
        },
    },

    HeaderTitle:{
        fontSize:"4rem",
        fontWeight:"bolder",
        margin:theme.spacing(1,0),
        textAlign:"center",
        marginLeft:"190px",
        [theme.breakpoints.down("xs")]: {
            fontSize:"3rem",
            margin:theme.spacing(1,0),
        },
    },

    HeaderDescription:{
        fontSize:"3rem",
        margin:theme.spacing(2,0),
        textAlign:"center",
        marginLeft:"170px",
        [theme.breakpoints.down("xs")]: {
            fontSize:"2rem",
            margin:theme.spacing(1,0),
        },
    },

    Navbar:{
        backgroundColor:Theme.colors.base1,
        color:Theme.colors.base2,
    },

    Toolbar:{
        display:"flex",
        flexFlow:"row wrap",
        justifyContent:"space-between",
        color:Theme.colors.base2,
    },

    Navlinks:{
        color:Theme.colors.base2,  
    },
}))