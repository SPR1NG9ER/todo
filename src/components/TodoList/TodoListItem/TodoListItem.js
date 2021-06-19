import "./TodoListItem.css";
import React from "react";


class TodoListItem extends React.Component {

    render() {
        const {challenge, important = false} = this.props;

        return (
            <span className={`innerTodo${important ? " important" : ""}`}>
            <div className="todoContent">
                {challenge} {important ? <i className="fas fa-star"/> : null}
            </div>
            <div className="TodoButtons">
                <button className="done" title="done"><i className="fas fa-check"/></button>
                <button className="delete" title="delete"><i className="fas fa-trash-alt"/></button>
            </div>
        </span>
        )
    }
}

export default TodoListItem;