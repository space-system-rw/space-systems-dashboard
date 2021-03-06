import React, { useState, createContext } from 'react';

export const UniversityContext = createContext();

export const UniversityContextProvider = (props) => {
    const [universities, setUniversities] = useState([]);
    const [selectedUniversity, setSelectedUniversity] = useState(null);

    const addUniversities = (university) => {
        setUniversities([...universities, university]);
    };

    return (
        <UniversityContext.Provider value={{ universities, setUniversities, addUniversities, selectedUniversity, setSelectedUniversity }}>
            {props.children}
        </UniversityContext.Provider>
    )
};