import React from 'react';

import './styles.css';

import NavBar from "../NavBar/NavBar";
import Menu from "../Menu/Menu"
import MachineList from "../MachineList/MachineList";

const ShowState =()=><div> 
    <NavBar />
        <div className='wrapper'>
            <Menu />
            <MachineList />                     
        </div>
    </div>;

export default ShowState;