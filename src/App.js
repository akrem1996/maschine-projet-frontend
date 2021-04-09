
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import {history} from './Redux/store'

import './App.css';
import Menu from './Components/Menu/Menu';
import MachineList from './Components/MachineList/MachineList';
import Charts from "./Components/Charts/Charts";
import Home from "./Components/Home/Home";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import NavBar from './Components/NavBar/NavBar';






class App extends React.Component {
  
  render(){
    console.log(this.props.userName)
    return (
      <div className="App">
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path= "/" component={() => <Login/>}/> 
            <Route  exact path="/signup" component={() =>  <SignUp/>}/>
            <Route exact path="/Showmachines" component={() => <MachineList machineList={this.props.maschineList} />  } />
          </Switch> 
        </ConnectedRouter> 
      </div>
    );
  } 
}




export default App;


