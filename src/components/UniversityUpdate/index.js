import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUniversity } from '../../actions/universities/universitiesActions';
import {
    Button, Card, FormControl, InputLabel, OutlinedInput
} from '@material-ui/core';
import toaster from '../../helpers/toast';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../api';
import Footer from '../../common/Footer';
import Header1 from '../../common/Header1';

import './UniversityUpdate.css';

const UniversityUpdate = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    const { id } = useParams();

    const [name, setName] = useState('');
    const [website, setWebsite] = useState('');
    const [location, setLocation] = useState('');
    const [fees, setFees] = useState('');

    useEffect(() => {
        const getOneUniversity = async () => {
            try {
                const response = await api.get(`/${id}`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'Application/json',
                    }
                });

                setName(response.data.existingUniversity.name);
                setWebsite(response.data.existingUniversity.website);
                setLocation(response.data.existingUniversity.location);
                setFees(response.data.existingUniversity.fees);
            } catch (error) {
                console.log('Error occured during fetching API.');
            }
        };

        getOneUniversity();
    }, [ id, setName, setWebsite, setLocation, setFees ]);

    const handleUniversityUpdate = async (e) => {
        e.preventDefault();

        try {
            dispatch(updateUniversity(id, {
                name,
                website,
                location,
                fees
            }));

            toaster('University updated successfully!', 'success');

            setTimeout(() => {
                history.push(`/`);
            }, 2000);    
        } catch (error) {
            toaster(error, 'Internal server error!');
        }
    };

    return (
        <>
            <Header1 />
            <ToastContainer
                draggable={true}
                transition={Zoom}
                autoClose={3000}
                position={toast.POSITION.TOP_RIGHT}
            />
            <Card className='Card'>
                    <div className="formWrapper1">
                        <FormControl className="form1" fullWidth variant="outlined" 
                            style={{ width: '80%', margin: '15px auto' }}
                        >
                            <InputLabel
                                className="name"
                                htmlFor="outlined-name">Name
                            </InputLabel>
                            <OutlinedInput
                                type="text"
                                labelWidth={50}
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl className="form1" fullWidth variant="outlined" 
                            style={{ width: '80%', margin: '15px auto' }}
                        >
                            <InputLabel className="website" htmlFor="outlined-website">Website</InputLabel>
                            <OutlinedInput
                                type="text"
                                labelWidth={60}
                                name="website"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                        </FormControl>
                        <FormControl className="form1" fullWidth variant="outlined" 
                            style={{ width: '80%', margin: '15px auto' }}
                        >
                            <InputLabel className="location" htmlFor="outlined-location">Location</InputLabel>
                            <OutlinedInput
                                type="text"
                                labelWidth={65}
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </FormControl>
                        <FormControl className="form1" fullWidth variant="outlined" 
                            style={{ width: '80%', margin: '15px auto' }}
                        >
                            <InputLabel className="location" htmlFor="outlined-fees">Fees in $</InputLabel>
                            <OutlinedInput
                                type="number"
                                labelWidth={70}
                                name="location"
                                value={fees}
                                onChange={(e) => setFees(e.target.value)}
                            />
                        </FormControl>
                            
                        <Button variant="contained" color="primary" className="submit"
                            style={{ fontSize: '20px', width: '80%', margin: '25px auto 50px auto', height: '50px' }}
                            onClick={handleUniversityUpdate}
                        >
                            Update University
                        </Button>
                </div>
            </Card>
            <Footer />
        </>
    )
}

export default UniversityUpdate;