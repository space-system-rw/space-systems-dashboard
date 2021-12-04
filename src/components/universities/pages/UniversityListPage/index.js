import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import toaster from '../../../../helpers/toast';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import {
    listUniversities,
    createUniversity,
    deleteUniversity
} from '../../../../actions/universities/universitiesActions';
import { UNIVERSITY_CREATE_RESET } from '../../../../actions/universities/types';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './UniversityAdd.css';


const StyledTableCell = withStyles((theme) => ({
    head: {
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

const UniversityListPage = () => {
    const classes = useStyles();
    let history = useHistory();

    const [name, setName] = useState('');
    const [website, setWebsite] = useState('');
    const [location, setLocation] = useState('');
    const [fees, setFees] = useState('');

    const dispatch = useDispatch();
    const universitiesList = useSelector(state => state.universitiesList);

    const { loading, message, error, universities } = universitiesList;

    const universityCreate = useSelector(state => state.universityCreate);

    const universityDelete = useSelector(state => state.universityDelete);

    const {
        loading: loadingCreate,
        message: messageCreate,
        error: errorCreate,
        success: successCreate,
        university: createdUniversity
    } = universityCreate;

    const {
        loading: loadingDelete,
        message: messageDelete,
        error: errorDelete,
        success: successDelete
    } = universityDelete;


    useEffect(() => {
        dispatch({ type: UNIVERSITY_CREATE_RESET });

        dispatch(listUniversities());
    }, [ dispatch, history, successCreate, createdUniversity, successDelete ]);

    const handleUniversitySelect = async (id) => {
        history.push(`/university/${id}`);
    };

    const handleUniversityCreate = (e) => {
        e.preventDefault();

        try {
            if (name === '') {
                toaster('Name is required!', 'warn');
                return false;
            } else if (website === '') {
                toaster('Website is required!', 'warn');
                return false;
            } else if (location === '') {
                toaster('Location is required!', 'warn');
                return false;
            } else if (fees === '') {
                toaster('Fees is required!', 'warn');
                return false;
            } else {
                dispatch(createUniversity({
                    name,
                    website,
                    location,
                    fees
                }));
            
                toaster('University added successfully!', 'success')
                setTimeout(() => {
                    window.location.reload();
                }, 3000);    
            }
        } catch (error) {
            toaster(error, 'Internal server error');
        }
    };
    
    const handleUniversityDelete = async (e, id) => {
        e.stopPropagation();
        try {
            dispatch(deleteUniversity(id));
            
            toaster('University deleted successfully!', 'success');
        } catch (error) {
            toaster(error, 'Internal server error');
        }
    };
    
    const handleUniversityUpdate = async (e, id) => {
        e.stopPropagation();
        history.push(`/university/${id}/update`);
    };

    return (
        <>
            {loadingCreate && "Loading..."}
            {errorCreate && `Error: ${errorCreate}`}
            {loadingDelete && "Loading..."}
            {errorDelete && `Error: ${errorDelete}`}

            <ToastContainer
                draggable={true}
                transition={Zoom}
                autoClose={3000}
                position={toast.POSITION.TOP_RIGHT}
            />

            <div className="formWrapper">
                <FormControl className="form" fullWidth variant="outlined" style={{ width: '450px', margin: '0 20px 0 0' }} >
                    <InputLabel className="name" htmlFor="outlined-name">
                        Name
                    </InputLabel>
                    <OutlinedInput
                        type="text"
                        labelWidth={50}
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl className="form" fullWidth variant="outlined" style={{ width: '200px', margin: '0 15px' }}>
                    <InputLabel className="website" htmlFor="outlined-website">Website</InputLabel>
                    <OutlinedInput
                        type="text"
                        labelWidth={60}
                        name="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </FormControl>
                <FormControl className="form" fullWidth variant="outlined" style={{  width: '180px', margin: '0 15px' }}>
                    <InputLabel className="location" htmlFor="outlined-location">Location</InputLabel>
                    <OutlinedInput
                        type="text"
                        labelWidth={70}
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </FormControl>
                <FormControl className="form" fullWidth variant="outlined" style={{ width: '180px', margin: '0 15px' }}>
                    <InputLabel className="fees" htmlFor="oultined-fees">Fees in $</InputLabel>
                    <OutlinedInput
                        type="number"
                        labelWidth={70}
                        name="fees"
                        value={fees}
                        onChange={(e) => setFees(e.target.value)}
                    />
                </FormControl>
                <Button variant="contained" color="primary" className="submit"
                    style={{ fontSize: '12px', width: '150px', margin: '0 0 0 20px' }}
                    onClick={handleUniversityCreate}
                >
                    Add University
                </Button>
            </div>
            
            <TableContainer component={Paper} style={{ width: '80%', margin: 'auto', marginTop: 30 }}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead  style={{ background: '#4051B6' }}>
                        <TableRow>
                            <StyledTableCell>University</StyledTableCell>
                            <StyledTableCell align="right">Website</StyledTableCell>
                            <StyledTableCell align="right">Location</StyledTableCell>
                            <StyledTableCell align="right">Fees</StyledTableCell>
                            <StyledTableCell align="right">Ratings</StyledTableCell>
                            <StyledTableCell align="right">Edit</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { loading ?
                            (<StyledTableRow style={{ marginLeft: 15 }}>
                                <StyledTableCell>
                                    Loading!
                                </StyledTableCell>
                            </StyledTableRow>)
                            :
                            error ?
                            (<StyledTableRow style={{ marginLeft: 15 }}>
                                <StyledTableCell>
                                    {error}!
                                </StyledTableCell>
                            </StyledTableRow>)
                            :
                            universities.map((university) => (
                            <StyledTableRow
                                key={university.id}
                                onClick= {() => handleUniversitySelect(university.id)}
                            >
                                <StyledTableCell component="th" scope="row">{university.name}</StyledTableCell>
                                <StyledTableCell align="right">{university.website}</StyledTableCell>
                                <StyledTableCell align="right">{university.location}</StyledTableCell>
                                <StyledTableCell align="right">{university.fees}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Box component="fieldset" borderColor="transparent">
                                        <Rating
                                        name="customized-empty"
                                        defaultValue={3}
                                        precision={0.5}
                                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                        />
                                    </Box>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button
                                        variant="contained"
                                        style={{ background: 'orange', color: 'white', fontSize: 12 }}
                                        className={classes.action}
                                        onClick={(e) => handleUniversityUpdate(e, university.id)}
                                    >
                                        Update
                                    </Button>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                <Button
                                    variant="contained"
                                    style={{ background: 'red', color: 'white', fontSize: 12 }}
                                    className={classes.action}
                                    onClick={(e) => handleUniversityDelete(e, university.id)}
                                >
                                    Delete
                                </Button>
                                    
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default UniversityListPage;
