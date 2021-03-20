import React from 'react';
import './styles.css';
import Element from '../Element/Element'

const menuElement= ['Home','show Machines','Charts']

const Menu =({})=>(
<div className='container-menu'>
    {menuElement.map((element,index) =>  <Element label ={element} key={index}/>)} 
</div>);

export default Menu;
