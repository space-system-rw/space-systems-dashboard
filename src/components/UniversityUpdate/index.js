import React, { useContext, useState } from 'react';import {
    Button, FormControl, InputLabel, OutlinedInput
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import toaster from '../../helpers/toast';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import Footer from '../../common/Footer';
import Header1 from '../../common/Header1';
import { useParams } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[600],
        }
    },
});

const UniversityUpdate = () => {

    const { id } = useParams();

    console.log(id);

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
            // const { name, website, location, fees } = values;

            // if (name === '') {
            //     toaster('Name is required!', 'warn');
            //     return false;
            // }
            // else if (website === '') {
            //     toaster('Website is required!', 'warn');
            //     return false;
            // }
            // else if (location === '') {
            //     toaster('Location is required!', 'warn');
            //     return false;
            // }
            // else if (fees === '') {
            //     toaster('Fees is required!', 'warn');
            //     return false;
            // }
            // else {
                // const response = await api.post('/', {
                //     name,
                //     website,
                //     location,
                //     fees
                // });

                // toaster('University added successfully!', 'success');

                // console.log(response.data.data);
                // addUniversities(response.data.data);

                // setTimeout(() => {
                //     history.push(`/`);
                // }, 2000);    

            // };
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
                <div className="formWrapper">
                <ThemeProvider
                    theme={theme}
                >
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
                            // onFocus={handlePhoneUpdate}
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
                            // onFocus={handleConfirmPasswordChange}
                        />
                    </FormControl>
                    <FormControl className="form" fullWidth variant="outlined" style={{ width: '180px', margin: '0 5px' }} >
                        <InputLabel className="location" htmlFor="outlined-fees">Fees in $</InputLabel>
                        <OutlinedInput
                            type="number"
                            labelWidth={70}
                            // error={(!state.passwordValid && state.confirmPasswordFocus) || state.fieldsRequired}
                            name="location"
                            value={values.fees}
                            onChange={handleChange('fees')}
                            // onFocus={handleConfirmPasswordChange}
                        />
                    </FormControl>
                        
                    <Button variant="contained" color="primary" className="submit"
                        style={{ fontSize: '12px', width: '150px' }}
                        onClick={handleSubmit}
                    >
                        Add University
                    </Button>
                </ThemeProvider>
            </div>
            <Footer />
        </>
    )
}

export default UniversityUpdate;