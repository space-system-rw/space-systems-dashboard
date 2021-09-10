import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';
import { UniversityContext } from '../../context/UniversityContext';
import Footer from '../../common/Footer';
import api from '../../api';

import './UniversityDetails.css';

const UniversityDetails = () => {

    const { id } = useParams();
    const { selectedUniversity, setSelectedUniversity } = useContext(UniversityContext);

    useEffect(() => {
        const getOneUniversity = async () => {
            try {
                const response = await api.get(`/${id}`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'Application/json',
                    }
                });

                setSelectedUniversity(response.data.existingUniversity);
            } catch (error) {
                console.log('Error occured during fetching API.');
            }
        };

        getOneUniversity();
    }, [ id, selectedUniversity, setSelectedUniversity ]);

    return (
        <>
            <div className='header-wrapper'>
                <h1 className='header font-weight-light display-1 text-center'>{selectedUniversity && selectedUniversity.name}</h1>
                <p className=''>University Website: {selectedUniversity && selectedUniversity.website}</p>
                <p className=''>Location: {selectedUniversity && selectedUniversity.location}</p>
                <p className=''>School fees: $ {selectedUniversity && selectedUniversity.fees} per annum</p>

                <div>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Ratings</Typography>
                        <Rating
                        name="customized-empty"
                        defaultValue={3}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        />
                    </Box>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UniversityDetails;