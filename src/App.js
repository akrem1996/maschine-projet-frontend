
import React from 'react';
import {connect} from "react-redux";
import socketIOClient from "socket.io-client";

import './App.css';
import NavBar from'./Components/NavBar/NavBar';
import Menu from './Components/Menu/Menu';
import MachineList from './Components/MachineList/MachineList';
import {getMaschine,  fetchLiveMachine} from "./Redux/Actions/machineAction"



class App extends React.Component {


  componentDidMount(){
    const ENDPOINT = "http://127.0.0.1:8000";
    const socket = socketIOClient(ENDPOINT);
    socket.on("sendMessage", data => {
      console.log(data)
      this.props.getLiveMachine(data)
    });

    this.props.getMaschineAction();
  }
  
  render(){
    console.log(this.props.maschineList)
    return (
      <div className="App">
        <NavBar title="Hello User"/>
        <div className='wrapper'>
        <Menu/>
         <MachineList machineList={this.props.maschineList} /> 
        </div>
      </div>
    );
  } 
  
}

const mapDispatchToProps = dispatch => {
  return {
    getMaschineAction: () => dispatch(getMaschine()),
    getLiveMachine : (data) => dispatch(fetchLiveMachine(data))
  }
}

const mapStateToProps = (state) => {
  return {
    maschineList: state.machines.machine
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


