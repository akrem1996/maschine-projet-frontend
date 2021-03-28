import React from 'react';
import './styles.css';
import Element from '../Element/Element';

import HomeIcon from '@material-ui/icons/Home';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const menuElement= [
        {
                title:'Home',
                link: '/',
                icon: <HomeIcon />
        } ,
        {
                title:'Show Machines',
                link: '/ShowMachines',
                icon: <VisibilityIcon />
        } ,
        {
                title:'Charts',
                link: '/Charts',
                icon: <EqualizerIcon />
        } 
]

const Menu =({})=>(
<div className='container-menu'>
        {menuElement.map((element,index) =>  <Element label ={element} key={index}/>)} 
</div>);

export default Menu;
