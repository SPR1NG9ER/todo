import "./SearchPanel.css";

const SearchPanel = () => {
    return (
        <div className="searchPanel">
            <input className="search" placeholder="Search..."/>
            <i className="fas fa-search searchDecoration"/>
        </div>
    )
}

export default SearchPanel;