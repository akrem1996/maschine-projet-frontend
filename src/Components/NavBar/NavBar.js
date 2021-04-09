import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'

import './styles.css';

export default class NavBar extends React.Component {

    componentDidMount(){
        
    }

    render (){
        const username = localStorage.getItem('username')
        if ( this.props.name === "authontification"){
            return (
                <div className='container'> 
                    <div> Authontification Screen </div>
                     <div className="container-item">
                        <Link className="nav-link" to={'/'}> Login </Link>
                        <Link className="nav-link" to={'/signup'}> Sign up </Link>
                    </div>
                  
                </div>
            )} else {
                return ( 
                    <div className='container'> 
                        <div> {username} </div>
                        <Link className="nav-link" to={'/'}> Logout </Link>
                    </div>
                )
            }
    }
     
       
    
}