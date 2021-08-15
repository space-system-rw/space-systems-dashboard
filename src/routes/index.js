import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import UniversityDetails from '../components/UniversityDetails';
import UniversityUpdate from '../components/UniversityUpdate';

export class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/university/:id" component={UniversityDetails} />
                        <Route exact path="/university/:id/update" component={UniversityUpdate} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;
