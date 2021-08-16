import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
        </div>
            <Footer />
        </>
    )
}

export default UniversityDetails;