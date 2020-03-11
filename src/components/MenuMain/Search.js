import React, { Component } from "react";
import {connect} from "react-redux"
import * as actions from "../../actions/index";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        keyword : ''
    };
  }
  onHandleChange = (event) =>{
    this.setState({
      keyword : event.target.value
    })
  }

  onSearch = () =>{
    this.props.onSearch(this.state.keyword);
  }

  render() {
    var { keyword } = this.state;
    return (
      <div className="search">
        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            placeholder="キーワードを入力"
            name="keyword"
            value={keyword}
            onChange={this.onHandleChange}
          />
          <button className="search-btn" onClick={this.onSearch}>
            <img src="\img\search-solid.svg" alt="search" />
          </button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//   };
// };

const mapDispatchToProps = (dispatch, props) => {
  return {
      onSearch: keyword => {
        dispatch(actions.searchTask(keyword));
      },
  };
};
export default connect(null, mapDispatchToProps)(Search);
