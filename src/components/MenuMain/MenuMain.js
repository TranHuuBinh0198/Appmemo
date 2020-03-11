import React, { Component } from "react";
import "./MenuMain.css";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { searchTask ,actshowContent} from "../../actions/index";
import Search from "./Search";
import {Link} from "react-router-dom"
class MenuMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  showContent=(id)=> {
	console.log("id",id);
	 this.props.onshowContent(id);
  }

  showTitle = () => {
    var { keyword } = this.props;
    let rs = [];
    let { data } = this.props;
    // if (keyword) {
    //   data = data.filter(item => {
    //     return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    //   });
    // }
	// console.log(data);
	
    data.map((item,index )=> {
    rs.push(
		<Link to="/content" key={index} className="main-link" >
        <div  onClick={()=>this.props.onshowContent(item.id)} className="menu-main-list">
		      <div className="list-title">
            <p>{item.title}</p>
            <div className="memo-title">
              <div className="clock-title">
                <img src="\img\clock-regular.svg" alt="clock" />
                <span>{item.Date}</span>
              </div>
              <div className="tag-soild">
                <img src="\img\tag.svg" alt="tag" />
                <span>{item.category}</span>
              </div>
            </div>
          </div>
        </div>
		</Link>
		
      );
    });
    return rs;
  };

  render() {
    // var { task, keyword } = this.state;
    return (
      <div className="menu-main">
        <Search onSearch={this.props.onSearch} />
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
    data: state.addData,
    keyword: state.searchMemo
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddMemo: dataAdd => {
      dispatch(actions.actAddMemo(dataAdd));
    },
    onSearch: keyword => {
      dispatch(searchTask(keyword));
	},
	onshowContent : (id)=>{
		console.log(id);
		
		dispatch(actshowContent(id))
	}
    // onSort: sort => {
    //   dispatch(sortTask(sort));
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuMain);
