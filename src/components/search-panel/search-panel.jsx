import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    }
  }

  onUpdateSearch = (event) => {
    const newSearchString = event.target.value;

    this.setState({searchString: newSearchString});
    this.props.onUpdateSearch(newSearchString);
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Найти сотрудника"
        value={this.state.searchString}
        onChange={this.onUpdateSearch}
      />
    )
  }
    
}

export default SearchPanel;