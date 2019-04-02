import React from 'react';
import '../static-files/css/App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Create from '../containers/createContainer';
import Read from '../containers/readContainer';
import Update from '../containers/updateContainer';
import Delete from '../containers/deleteContainer';

const App = () => {


        return (
            <Router>
                <div className="App">
                    <header className= "">

                            <button className="header-button" >
                                <Link to="/create">Create</Link>
                            </button>

                            <button className="header-button" >
                                <Link to="/read">Read</Link>
                            </button>

                            <button className = "header-button" >
                                <Link to="/update">Update</Link>
                            </button>

                            <button className = "header-button" >
                                <Link to="/delete">Delete</Link>
                            </button>

                        

                    </header>

                    <Route exact path="/" component={Read} />
                    <Route path="/create" component={Create} />
                    <Route path="/read" component={Read} />
                    <Route path="/update" component={Update} />
                    <Route path="/delete" component={Delete} />

                </div>
            </Router>
        );
}

export default App;