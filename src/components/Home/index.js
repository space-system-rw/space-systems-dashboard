import React from 'react';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import UniversityList from '../universities/pages/UniversityListPage';

export const index = () => {
    return (
        <div>
            <Header />
            <UniversityList />
            <Footer />
        </div>
    )
}

export default index;
