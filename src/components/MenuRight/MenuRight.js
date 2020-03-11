import React, { Component } from "react";
import "./MenuRight.css";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

class MenuRight extends Component {

  showcontent=()=>{
    let { id ,addData} = this.props;
    let rs = [];
    addData.forEach(element=>{
      if(element.id === id){
       rs = 
          <Link to="/content" className="right-link">
          <div key={id} className="menu-right">
          <div className="menu-right-main">
            <div className="memo-title">
              <div className="clock-title">
                <img src="\img\clock-regular.svg" alt="clock" />
                <span>{element.Date}</span>
              </div>
              <div className="tag-soild">
                <img src="\img\tag.svg" alt="tag" />
                <span>{element.category}</span>
              </div>
            </div>
            <div className="title-bar">
              <h2>{element.title}</h2>
              <hr />
            </div>
            <div className="menu-content">
              <p>{element.content}</p>
            </div>
          </div>
        </div>
        </Link>
      }
    });
    return rs;
  }
  render() {
    return(
      <div>
      {this.showcontent()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    addData: state.addData,
    id: state.id
  };
};


export default connect(mapStateToProps, null)(MenuRight);
