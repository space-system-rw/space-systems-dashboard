import React, { Component } from 'react';
import Routes from './routes';
import './App.css';

import { UniversityContextProvider } from './context/UniversityContext';

export class App extends Component {
    render() {
        return (
            <UniversityContextProvider>
                <div>
                    <Routes />
                </div>
            </UniversityContextProvider>
        );
    }
}

export default App;
