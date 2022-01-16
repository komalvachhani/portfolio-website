import { Typography,Box } from "@material-ui/core"
import { useStyles } from "../HeaderComponents/HeaderStyles";
import { useStyles as BodyStyles } from "../BodyComponents/BodyStyles"

export const DividerLine = () => {
    const classes = BodyStyles();
    return <Typography className={classes.DividerLine}></Typography>
};

export const RenderSectionHeading = ({heading, description, alignCenter}) => {
    const classes = BodyStyles();
    
    return (
        <Box className={classes.SectionHeadingContainer}>
        {/* component title */}
    
        {/* section heading */}
        <Typography variant="h4" align={alignCenter ? "center":"left"} className={classes.SectionHeading}>
          {heading}
        </Typography>

        {/* divider line */}
        {DividerLine()}

        {/* description */}
        <Typography variant="body1" component="h6" align={alignCenter ? "center":"left"} className={classes.SectionDescription}>
            {description}
        </Typography>
        </Box>
    )
};