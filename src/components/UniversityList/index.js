import React, { useContext, useEffect } from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import api from '../../api';
import { UniversityContext } from '../../context/UniversiityContext';
import toaster from '../../helpers/toast';
import { useHistory } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
    head: {
        // backgroundColor: theme.palette.primary,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const UniversityList = (props) => {
    
    let history = useHistory();
    
    const classes = useStyles();

    const { universities, setUniversities } = useContext(UniversityContext);
        
    useEffect(() => {
        const getUniversities = async () => {
            try {
                const response = await api.get('/', {
                    method: 'get',
                    headers: {
                        'Content-Type': 'Application/json',
                    }
                });

                setUniversities(response.data.allUniversities);
            } catch (error) {
                console.log('Error occured during fetching API.');
            }
        };

        getUniversities();
    }, [ setUniversities ]);

    const handleUpdate = async (id) => {
        history.push(`/university/${id}/update`);
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/${id}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'Application/json'
                }
            });

            setUniversities(universities.filter((university) => university.id !== id));

            toaster('University deleted successfully!', 'success');
        } catch (error) {
            toaster(error, 'Internal server error');
        }
    };

    return (
        <>
            <TableContainer component={Paper} style={{ width: '80%', margin: 'auto', marginTop: 30 }}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead  style={{ background: '#4051B6' }}>
                        <TableRow>
                            <StyledTableCell>University</StyledTableCell>
                            <StyledTableCell align="right">Website</StyledTableCell>
                            <StyledTableCell align="right">Location</StyledTableCell>
                            <StyledTableCell align="right">Fees</StyledTableCell>
                            <StyledTableCell align="right">Edit</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { universities && universities.map((university) => (
                            <StyledTableRow key={university.id}>
                                <StyledTableCell component="th" scope="row">
                                    {university.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{university.website}</StyledTableCell>
                                <StyledTableCell align="right">{university.location}</StyledTableCell>
                                <StyledTableCell align="right">{university.fees}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button
                                        variant="contained"
                                        // color="primary"
                                        style={{ background: 'orange', color: 'white' }}
                                        className={classes.action}
                                        onClick={() => handleUpdate(university.id)}
                                    >
                                        Update
                                    </Button>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                <Button
                                    variant="contained"
                                    // color="primary"
                                    style={{ background: 'red', color: 'white' }}
                                    className={classes.action}
                                    onClick={() => handleDelete(university.id)}
                                >
                                    Delete
                                </Button>
                                    
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default UniversityList;
