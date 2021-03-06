import "./createTask.css";
import React from "react";

class CreateTask extends React.Component {
    state = {
        taskName: "",
    }


    newTaskName = (e) => {
        this.setState(() => {
            return{
                taskName: e.target.value,
            }
        })
    }

    createTask = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state.taskName);
        this.setState({taskName: ""});
    }


    render() {

        return (
            <form className="createTask" onSubmit={this.createTask}>
                <input className="taskInput" placeholder="Type task..." onChange={this.newTaskName} value={this.state.taskName} required/>
                <button className="taskButton">Create New Task</button>
            </form>
        )
    }

}

export default CreateTask;