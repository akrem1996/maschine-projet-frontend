import React from 'react';
import { Bar } from 'react-chartjs-2';
import './styles.css';

 
    class Charts extends React.Component {
        render () {
            const allMachines=this.props.machineList.map(function (obj) {
                return obj.modelName;
              });
            const stateMachine=this.props.machineList.map(function (obj) {
                return obj.state;
              });
            
            return (
            <div>
             <Bar data={{ 
                 labels : allMachines,
                 datasets:[
                     {
                        label: 'connected',
                        data: stateMachine,
                        backgroundColor: 'green'
                     },

                 ]
               }}
                height={300}
                width={600}
            />
            </div> 
            ) 
        }
    }
    
        
export default Charts;