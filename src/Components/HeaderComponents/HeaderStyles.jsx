import { makeStyles } from "@material-ui/styles";
import { Theme } from "./Theme";

export const useStyles = makeStyles(() => ({
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

    HeaderTitle:{
        fontSize:"3rem",
        fontWeight:"bold",
        marginLeft:"60px",
    },

    HeaderDescription:{
        fontSize:"2rem",
        marginLeft:"60px"
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