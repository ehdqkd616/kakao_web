import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        textAlign: "center",
    },
    link: {
        textDecoration: "none",
    },
}));

const Footer = (props) =>
{
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root} elevation={0}>
                <Typography component="p">
                    <p>카카오톡 API와 React, Material-UI로 만들었습니다.</p>
                    <p>@Rudy_Kim</p>
                </Typography>
            </Paper>
        </div>
    );
};

export default Footer;