import TodoListItem from "./TodoListItem/TodoListItem";
import "./TodoList.css"

const TodoList = ({Todos, onDelete, makeImportant, makeDone}) => {


    const TodoListItems = Todos.map(Todo => {
            const {id, ...TodosProp} = Todo;
            return (
                <li className="todoItem" key={id} id={id}>
                    <TodoListItem
                        onDelete={() => onDelete(id)}
                        makeImportant={() => {makeImportant(id)}}
                        makeDone={() => makeDone(id)} {...TodosProp}/>
                </li>)
        }
    )

    return (
        <ul className="todoList">
            {TodoListItems}
        </ul>
    )
}

export default TodoList