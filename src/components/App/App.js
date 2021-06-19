import AppHeader from "../AppHeader/";
import TodoList from "../TodoList/";
import MainPanel from "../MainPanel/MainPanel";
import './App.css';
import TaskStats from "../TaskStats";

const Todos = [
    {
        challenge: "drink", important: false, id: 1
    },
    {
        challenge: "make react app", important: true, id: 2
    },
    {
        challenge: "eat pizza", important: true, id: 3
    }
]

function App() {
    return (
        <main className="main">
            <AppHeader />
            <MainPanel />
            <TaskStats />
            <TodoList  Todos={Todos}/>
        </main>
    );
}

export default App;
