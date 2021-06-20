import "./TaskStats.css"

const TaskStats = (props) => {
    return(
        <div className="stats"> {props.toDoCount} done, {props.toDoLeft} more to do</div>
    )
}

export default TaskStats;