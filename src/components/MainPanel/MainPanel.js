import "./MainPanel.css";
import SearchPanel from "./SeacrhPanel";
import FilterPanel from "./FilterPanel";

const MainPanel = () => {
    return (
        <div className="mainPanel">
            <SearchPanel/>
            <FilterPanel />
        </div>
    )
}

export default MainPanel;