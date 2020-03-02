import React, { Component } from "react";
import "./MenuMain.css";
import {connect} from "react-redux"
import * as actions from "../../actions/index";
class MenuMain extends Component {


  showTitle = () => {
    // console.log(this.props.data);
    let { data } = this.props;
    let rs = [];
    data.map(item => {
      rs.push(
        <div className="list-title">
          <p>{item.titleMemo}</p>
          <div className="memo-title">
            <div className="clock-title">
              <img src="\img\clock-regular.svg" alt="clock" />
              <span>{item.categoryDate}</span>
            </div>
            <div className="tag-soild">
              <img src="\img\tag.svg" alt="tag" />
              <span>{item.categoryName}</span>
            </div>
          </div>
        </div>
      );
    });
    return rs;
  };

  render() {
    return (
      <div className="menu-main">
        <div className="search">
          <div className="search-box">
            <input
              className="search-txt"
              type="text"
              placeholder="キーワードを入力"
              name="search"
            />
            <button className="search-btn">
              <img src="\img\search-solid.svg" alt="search" />
            </button>
          </div>
        </div>
        <div className=" title">
          <p>title</p>
          <a className="sort">
            <img src="\img\sort-amount-up-alt-solid.svg" alt="sort" />
          </a>
        </div>
        {this.showTitle()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data : state.addData
  };
};


const mapDispatchToProps = (dispatch, props) => {
  return {
      onAddMemo: dataAdd => {
          dispatch(actions.actAddMemo(dataAdd));
      },
  };
};
export default connect(mapStateToProps, null)(MenuMain);
