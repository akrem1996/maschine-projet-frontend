import React from 'react';

import './styles.css';

import NavBar from "../NavBar/NavBar";
import Menu from "../Menu/Menu"
import Classification from "../ClassificationList/Classification"

const ShowClassification =()=><div> 
    <NavBar />
        <div className='wrapper'>
            <Menu />
            <Classification />                   
        </div>
    </div>;

export default ShowClassification;