import AppHeader from "../AppHeader/";
import TodoList from "../TodoList/";
import MainPanel from "../MainPanel/MainPanel";
import './App.css';
import TaskStats from "../TaskStats";
import React from "react";
import CreateTask from "../CreateTask";

class App extends React.Component {

    startId = 1;

    state = {
        todoData: [
            this.createTask("Drink Tea"),
            this.createTask("Make Awesome React App"),
            this.createTask("Eat Pizza")
        ],
    }



    createTask(challenge) {
        return {challenge, important: false, done: false, id: this.startId++}
    }

    addTask = (challenge) => {
        this.setState(({todoData}) => {
                return {
                    todoData: [...todoData, this.createTask(challenge)]
                }
            }
        )
    }

    deleteTask = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(el => el.id === id);

            let newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            }
        })
    }

    makeImportant = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(el => el.id === id);
            console.log(todoData[idx].important)
            const newItem = {...todoData[idx], important: !this.state.todoData[idx].important}

            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    newItem,
                    ...todoData.slice(idx + 1)
                ]
            }
        })
    }

    makeDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(el => el.id === id)

            const newItem = {...todoData[idx], done: !this.state.todoData[idx].done}
            console.log(todoData[idx].done)
            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    newItem,
                    ...todoData.slice(idx + 1)
                ]
            }
        })
    }

    render() {
        const toDoCount = this.state.todoData.filter( el => el.done).length;
        const toDoLeft = this.state.todoData.length - toDoCount;

        console.log(toDoCount);
        console.log(toDoLeft)

        return (
            <main className="main">
                <AppHeader/>
                <MainPanel/>
                <TaskStats toDoCount={toDoCount} toDoLeft={toDoLeft}/>
                <TodoList onDelete={this.deleteTask} makeImportant={this.makeImportant} makeDone={this.makeDone}
                          Todos={this.state.todoData}/>
                <CreateTask onCreate={this.addTask}/>
            </main>
        );
    }
}

export default App;
