import React from 'react';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import UniversityAdd from '../UniversityAdd';
import UniversityList from '../UniversityList';

export const index = () => {
    return (
        <div>
            <Header />
            <UniversityAdd />
            <UniversityList />
            <Footer />
        </div>
    )
}

export default index;