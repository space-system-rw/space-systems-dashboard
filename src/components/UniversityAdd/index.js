import React, { useContext, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
    Button, FormControl, InputLabel, OutlinedInput
} from '@material-ui/core';

import toaster from '../../helpers/toast';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import api from '../../api';

import './UniversityAdd.css';
// import { UniversityContext } from '../../context/UniversityContext';

const UniversityAdd = () => {

    // let history = useHistory();

    // const { addUniversities } = useContext(UniversityContext);

    const [values, setValues] = useState({
        name: '',
        website: '',
        location: '',
        fees: '',
    });

    const handleChange = (props) => (event) => {
        setValues({ ...values, [props]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { name, website, location, fees } = values;

            if (name === '') {
                toaster('Name is required!', 'warn');
                return false;
            }
            else if (website === '') {
                toaster('Website is required!', 'warn');
                return false;
            }
            else if (location === '') {
                toaster('Location is required!', 'warn');
                return false;
            }
            else if (fees === '') {
                toaster('Fees is required!', 'warn');
                return false;
            }
            else {
                const response = await api.post('/', {
                    name,
                    website,
                    location,
                    fees
                });

                toaster('University added successfully!', 'success');
                
                // addUniversities(response.data.data);
                // setTimeout(() => {
                //     // history.push(`/`);
                //     window.location.reload();
                // }, 2000);    


            };
        } catch (error) {
            toaster(error, 'Internal server error!');
        }
    };
    
    return (
        <>
        <ToastContainer
            draggable={true}
            transition={Zoom}
            autoClose={3000}
            position={toast.POSITION.TOP_RIGHT}
        />
            <div className="formWrapper">
                <FormControl className="form" fullWidth variant="outlined" style={{ width: '400px', margin: '0 5px' }} >
                    <InputLabel
                        className="name"
                        htmlFor="outlined-name">Name
                    </InputLabel>
                    <OutlinedInput
                        type="text"
                        labelWidth={50}
                        name="name"
                        value={values.name}
                        onChange={handleChange('name')}
                    />
                </FormControl>
                <FormControl className="form" fullWidth variant="outlined" style={{ width: '200px', margin: '0 5px' }} >
                    <InputLabel className="website" htmlFor="outlined-website">Website</InputLabel>
                    <OutlinedInput
                        type="text"
                        labelWidth={60}
                        name="website"
                        value={values.website}
                        onChange={handleChange('website')}
                    />
                </FormControl>
                <FormControl className="form" fullWidth variant="outlined" style={{ width: '300px', margin: '0 5px' }} >
                    <InputLabel className="location" htmlFor="outlined-location">Location</InputLabel>
                    <OutlinedInput
                        type="text"
                        labelWidth={65}
                        name="location"
                        value={values.location}
                        onChange={handleChange('location')}
                    />
                </FormControl>
                <FormControl className="form" fullWidth variant="outlined" style={{ width: '180px', margin: '0 5px' }} >
                    <InputLabel className="location" htmlFor="outlined-fees">Fees in $</InputLabel>
                    <OutlinedInput
                        type="number"
                        labelWidth={70}
                        name="location"
                        value={values.fees}
                        onChange={handleChange('fees')}
                    />
                </FormControl>
                    
                <Button variant="contained" color="primary" className="submit"
                    style={{ fontSize: '12px', width: '150px' }}
                    onClick={handleSubmit}
                >
                    Add University
                </Button>
            </div>
        </>
    )
}

export default UniversityAdd;
