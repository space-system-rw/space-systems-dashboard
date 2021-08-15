import React, { useState, createContext } from 'react';

export const UniversityContext = createContext();

export const UniversityContextProvider = (props) => {
    const [universities, setUniversities] = useState([]);

    const addUniversties = (university) => {
        setUniversities([...universities, university]);
    };

    return (
        <UniversityContext.Provider value={{ universities, setUniversities, addUniversties }}>
            {props.children}
        </UniversityContext.Provider>
    )
};