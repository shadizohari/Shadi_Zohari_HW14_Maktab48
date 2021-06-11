import React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import WithLoading from "./WithLoading";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 350,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    TableRow: {
        cursor: "pointer",
    },
    margin: {
        marginRight: "10px",
    },

    btn: {
        marginTop: "30px",
        paddingBottom: "200px",
    }

}));

function TableData({ length, data, ...props }) {

    const classes = useStyles();
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(10)
    const [array, setArray] = useState([]);
    let history = useHistory();

    useEffect(() => {
        let x = length % 10;
        let y;
        if (x != 0) {
            y = (length / 10).ceil();
        } else {
            y = length / 10;
        }
        let arr = [];
        for (let i = 1; i <= y; i++) {
            arr.push(i)
        }
        setArray([...arr])
    }, [length])

    function changePage(num) {
        setStart((num - 1) * 10);
        setEnd(num * 10);
    }
    
    function showInfo(id) {
        history.push(`/Info/${id}`)
    }


    return (
        <div>
            <div>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">#</TableCell>
                                <TableCell align="left">Full Name</TableCell>
                                <TableCell align="left">Tell Number</TableCell>
                                <TableCell align="left">Image</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (index < end && index >= start) ? (
                                <TableRow key={row.id} className={classes.TableRow} onClick={() => { showInfo(row.id) }}>
                                    <TableCell align="left">{index + 1}</TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.tell}</TableCell>
                                    <TableCell align="left"> <Avatar className={classes.large} src={row.avatar} /></TableCell>
                                </TableRow>

                            ) : false)}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
            <div className={classes.btn}>
                {array.map((num) => (
                    <Button className={classes.margin} key={num} variant="contained" onClick={() => { changePage(num) }}>{num}</Button>
                ))}

            </div>
        </div>
    );
}

const LoadUser = WithLoading(TableData, "https://60b4f7e4fe923b0017c8352a.mockapi.io/blog/info");
export default LoadUser
