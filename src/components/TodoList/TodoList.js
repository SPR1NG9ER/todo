import TodoListItem from "./TodoListItem/TodoListItem";
import "./TodoList.css"

const TodoList = ({Todos}) => {


    const TodoListItems = Todos.map( Todo =>
        {
            const {id, ...TodosProp} = Todo;
            return (<li className="todoItem"><TodoListItem key={id} {...TodosProp}/></li>)
        }
    )

    return (
        <ul className="todoList">
            {TodoListItems}
        </ul>
    )
}

export default TodoList