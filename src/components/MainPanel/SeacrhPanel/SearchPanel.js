import "./SearchPanel.css";
import React from "react";

class SearchPanel extends React.Component {
    state = {
        term:""
    }

    searchChange = (e) => {
        const term = e.target.value;
        this.setState({ term});
        this.props.setTerm(this.state.term);
    }

    render() {
        const {setTerm} = this.props;

        const changeTerm = (e) => {
            setTerm(e.target.value);
        }
        return (
            <div className="searchPanel">
                <input className="search" placeholder="Search..." onChange={changeTerm}/>
                <i className="fas fa-search searchDecoration"/>
            </div>
        )
    }
}

export default SearchPanel;