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
        term: "",
        filter: ""
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

    setTerm = (newTerm) => {
        this.setState(() => {
            return{
                term: newTerm
            }
        })
    }

    search = (items, term) => {
        if(term === ""){
            return items;
        }

        return items.filter(item => {
            return item.challenge.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    filter = (items, filter) => {
        switch (filter) {
            case "all":
                return items;
            case "active":
                return items.filter( item => !item.done)
            case "done":
                return items.filter( item => item.done);
            default:
                return items
        }
    }

    setFilter = (filter) => {
        this.setState({filter})
    }

    render() {

        const {todoData, term, filter} = this.state;

        const toDoCount = this.state.todoData.filter( el => el.done).length;
        const toDoLeft = this.state.todoData.length - toDoCount;
        let visibleItems = this.filter(this.search(todoData, term),this.state.filter);

        return (
            <main className="main">
                <AppHeader/>
                <MainPanel setTerm={this.setTerm} setFilter={this.setFilter} filter={filter}/>
                <TaskStats toDoCount={toDoCount} toDoLeft={toDoLeft}/>
                <TodoList onDelete={this.deleteTask} makeImportant={this.makeImportant} makeDone={this.makeDone}
                          Todos={visibleItems}/>
                <CreateTask onCreate={this.addTask}/>
            </main>
        );
    }
}

export default App;
