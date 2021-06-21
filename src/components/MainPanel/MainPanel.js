import "./MainPanel.css";
import SearchPanel from "./SeacrhPanel";
import FilterPanel from "./FilterPanel";

const MainPanel = ({setTerm, setFilter, filter}) => {
    return (
        <div className="mainPanel">
            <SearchPanel setTerm={setTerm}/>
            <FilterPanel setFilter={setFilter} filter={filter}/>
        </div>
    )
}

export default MainPanel;