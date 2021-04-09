import React from "react";
import {connect} from "react-redux";
import socketIOClient from "socket.io-client";
import {getMaschine,  fetchLiveMachine} from "../../Redux/Actions/machineAction";
import { withRouter } from 'react-router-dom';

import "./styles.css";

import MachineItem from "../MachineItem/MachineItem";

class MachineList extends React.Component {

  state = { show: "all" };

  componentDidMount(){
    const ENDPOINT = "http://127.0.0.1:8000";
    const socket = socketIOClient(ENDPOINT);
    socket.on("sendMessage", data => {
      this.props.getLiveMachine(data)
    });
    this.props.getMaschineAction();
  }

  handleShow(activatedPart) {
    return this.setState({
      show: activatedPart,
    });
  }

  render() {
    return (
      <div className="machine-container">
        <div >
          <div
            className={this.state.show === "all" ? "machine-bar-title-actif" : "machine-bar-title"}
            onClick={() => this.handleShow("all")}
          >
            All Machines
          </div>
          {this.state.show === "all" && (
            <div>
              {this.props?.machineList?.map((machine, index) => (
                <div className="machine-section"><MachineItem machine={machine}/></div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div
            className={this.state.show === "on" ? "machine-bar-title-actif" : "machine-bar-title"}
            onClick={() => this.handleShow("on")}
          >
            Connected Machines
          </div>
          {this.state.show === "on" && (
            <div>
              {this.props?.machineList
                ?.filter((element) => element.state === 1)
                .map((machine, index) => (
                    <div className="machine-section"><MachineItem machine={machine}/></div>
                ))}
            </div>
          )}
        </div>
        <div>
          <div
            className={this.state.show === "off" ? "machine-bar-title-actif" : "machine-bar-title"}
            onClick={() => this.handleShow("off")}
          >
            Not Connected Machines
          </div>
          {this.state.show === "off" && (
            <div>
              {this.props?.machineList
                ?.filter((element) => element.state === 0)
                .map((machine, index) => (
                    <div className="machine-section"><MachineItem machine={machine}/></div>
                ))}
            </div>
          )}
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
    maschineList: state.machines.machine,
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (withRouter(MachineList));
