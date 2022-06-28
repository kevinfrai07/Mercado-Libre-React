import React from 'react';
import Nav from './Layouts/Nav';
import { Fragment } from 'react';

const Home = () => {
    localStorage.clear();
    return (
        <Fragment>
            <Nav/>
        </Fragment>

    )
}
export default Home;