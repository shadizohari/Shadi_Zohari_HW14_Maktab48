import "../css/Info.css"
import React, { useRef, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { MdArrowBack } from 'react-icons/md';
import "../css/Info.css";
import { useHistory } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    input: {
        width: "90%",
        textAlign: "center",
    },
}));


function Info({ data, ...props }) {
    const classes = useStyles();
    const inputFocus = useRef(null);
    let history = useHistory();


    useEffect(() => {
        inputFocus.current.children[1].children[0].focus();
    }, [data])
    function goTable() {
        history.push(`/`)
    }
    return (
        <div>
            <MdArrowBack className="back" onClick={goTable} />
            <Grid container spacing={3} direction="row-reverse">
                <Grid item align="center" xs={12} md={6} lg={4}>
                    <Avatar className={classes.large} src={data.avatar} />
                </Grid>
                <Grid align="center" item xs={12} md={6} lg={4}>
                    <TextField
                        className={classes.input}
                        required
                        id="name"
                        label="Full Name"
                        value={data.name}
                    />
                </Grid>
                <Grid align="center" item xs={12} md={6} lg={4} >
                    <TextField
                        className={classes.input}
                        required
                        id="tell"
                        label="Phone Number"
                        value={data.tell}
                    />
                </Grid>
                <Grid align="center" item xs={12} md={6} lg={4}>
                    <TextField
                        className={classes.input}
                        required
                        id="company"
                        label="Company"
                        value={data.company}
                        ref={inputFocus}
                    />
                </Grid>
                <Grid align="center" item xs={12} md={6} lg={4}>
                    <TextField
                        className={classes.input}
                        required
                        id="email"
                        label="Email"
                        value={data.email}
                    />
                </Grid>
                <Grid align="center" item xs={12} md={6} lg={4}>
                    <TextField
                        className={classes.input}
                        required
                        id="code"
                        label="id code"
                        value={data.code}
                    />
                </Grid>
            </Grid>

        </div>
    );
}

export default Info;



