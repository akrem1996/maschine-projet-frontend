import React from "react";
import "./styles.css";

import MachineItem from "../MachineItem/MachineItem";

class MachineList extends React.Component {
  state = { show: "all" };
  handleShow(activatedPart) {
    return this.setState({
      show: activatedPart,
    });
  }
  render() {
    console.log(this.props.machineList);
    return (
      <div className="machine-container">
        <div >
          <div
            className={this.state.show === "all" ? "machine-bar-title-actif" : "machine-bar-title"}
            onClick={() => this.handleShow("all")}
          >
            {" "}
            All Machines
          </div>
          {this.state.show === "all" && (
            <div>
              {" "}
              {this.props?.machineList?.map((machine, index) => (
                <div className="machine-section"><MachineItem machine={machine}/></div>
              ))}{" "}
            </div>
          )}
        </div>
        <div>
          <div
            className={this.state.show === "on" ? "machine-bar-title-actif" : "machine-bar-title"}
            onClick={() => this.handleShow("on")}
          >
            {" "}
            Connected Machines
          </div>
          {this.state.show === "on" && (
            <div>
              {" "}
              {this.props?.machineList
                ?.filter((element) => element.state === 1)
                .map((machine, index) => (
                    <div className="machine-section"><MachineItem machine={machine}/></div>
                ))}{" "}
            </div>
          )}
        </div>
        <div>
          <div
            className={this.state.show === "off" ? "machine-bar-title-actif" : "machine-bar-title"}
            onClick={() => this.handleShow("off")}
          >
            {" "}
            Not Connected Machines
          </div>
          {this.state.show === "off" && (
            <div>
              {" "}
              {this.props?.machineList
                ?.filter((element) => element.state === 0)
                .map((machine, index) => (
                    <div className="machine-section"><MachineItem machine={machine}/></div>
                ))}{" "}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MachineList;
