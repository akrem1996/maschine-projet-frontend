import React from "react";
import "./styles.css";

const MachineItem = ({ machine }) => {
  return (
    <div className="card-container">
      <span> modelDisplayName: {machine.modelDisplayName} </span><br />
      <span> modelName: {machine.modelName} </span><br />
      <span> classification: {machine.classification} </span><br />
      <span> icon: {machine.icon} </span>
    </div>
  );
};

export default MachineItem;
