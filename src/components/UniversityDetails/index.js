import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUniversity } from '../../actions/universities/universitiesActions';

import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';
import Footer from '../../common/Footer';

import './UniversityDetails.css';

const UniversityDetails = ({ match }) => {

    const dispatch = useDispatch();

    const universityDetails = useSelector(state => state.universityDetails);

    const { loading, message, error, university } = universityDetails;

    useEffect(() => {
        dispatch(detailsUniversity(match.params.id));
    }, [ dispatch, match ]);

    return (
        <>
            <div className='header-wrapper'>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '20px', color: 'grey' }}>
                    Go Back to Universities
                </Link>

                {
                    loading ?
                    (<h1>Loading...</h1>)
                    :
                    error ?
                    (<h1>{error}!</h1>)
                    :
                    <div>
                        <h1 className='header font-weight-light display-1 text-center'>{ university && university.name }</h1>
                        <p className=''>Website: { university && university.website }</p>
                        <p className=''>Location: { university && university.location }</p>
                        <p className=''>School fees: $ 1{ university && university.fees } per annum</p>
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
                }
            </div>
            <Footer />
        </>
    )
}

export default UniversityDetails;