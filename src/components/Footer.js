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
                    <a href="https://cpro95.tistory.com/50"><p>원본 소스 출처</p></a>
                    <a href="https://github.com/ehdqkd616"><p>배포자 깃허브 주소</p></a>
                    <p>배포자 @Rudy_Kim</p>
                    <p>개발중 ~ing</p>
                </Typography>
            </Paper>
        </div>
    );
};

export default Footer;