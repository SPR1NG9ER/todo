import "./FilterPanel.css";
import React from "react";


class FilterPanel extends React.Component{

    render() {
        return (
            <div className="filterPanel">
                <button className="active">All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        )
    }
}

export default FilterPanel;