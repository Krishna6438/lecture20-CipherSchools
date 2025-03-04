// import { Component } from "react";

import { useState } from "react";
import Task from "../components/Task";

// class ToDoScreen extends Component{

//     state={
//         taskCounter : 0,
//     };
//     render(){
//         return(
            
//             <div className="screen">
//                 <h1 className="ui heading center">ToDo List</h1>
//                 <div>
//                     <button className="ui secondary button" onClick={(e)=>{
//                         this.setState({...this.state,taskCounter:this.state.taskCounter+1})
//                     }}>Add Task</button>
//                     <p>The number of tasks are:{this.state.taskCounter}</p>
//                 </div>
//             </div>
//         )
//     }
// }

const ToDoScreen = ()=>{
    const[taskList,setTaskList] = useState([]);
    return(
            
        <div className="screen">
            <h1 className="ui heading center">ToDo List</h1>
            <div>
                <button className="ui secondary button" onClick={(e)=>{
                   setTaskList([...taskList,{
                    title:"Go to gym",
                    description:"Do 30 minutes of cardio",
                   }])
                }}>Add Task</button>
               {taskList.map((task)=><Task />)}
            </div>
        </div>
    )
}

export default ToDoScreen;