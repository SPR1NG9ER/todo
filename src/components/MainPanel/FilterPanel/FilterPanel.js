import "./FilterPanel.css";
import React from "react";


class FilterPanel extends React.Component{

    buttonsData = [
        {name: "all", label: "All"},
        {name: "active", label: "Active"},
        {name: "done", label: "Done"}
    ]

    render() {
        const {setFilter, filter} = this.props;

        const buttons = this.buttonsData.map( item => {
            return <button key={item.name} className={filter === item.name ? "active" : null} onClick={ () => setFilter(item.name)} >{item.label}</button>
        })

        return (
            <div className="filterPanel">
                {buttons}
            </div>
        )
    }
}

export default FilterPanel;