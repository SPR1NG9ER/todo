import "./TodoListItem.css";
import React from "react";


class TodoListItem extends React.Component {

    render() {
        const {challenge, onDelete, makeDone, makeImportant, important, done} = this.props;

        let classNames = "innerTodo";

        if(done){
            classNames += " completed ";
        }
        return (
            <span className={classNames}>
            <div className="todoContent">
                <span>{challenge}</span> {important ? <i className="fas fa-star"/> : null}
            </div>
            <div className="todoButtons">
                <button className="done" title="done" onClick={makeDone}><i className="fas fa-check"/></button>
                <button className="importantBtn" onClick={makeImportant}><i className="fas fa-star"/></button>
                <button className="delete" title="delete" onClick={onDelete}><i className="fas fa-trash-alt"/></button>
            </div>
        </span>
        )
    }
}

export default TodoListItem;