import React, { Component } from "react";
import './MenuLeft.css';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {
  actShowAllMemo,
  actShowCategory,
} from "./../../actions/index";
class MenuLeft extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      statusAll:false,
        status: false,
        statusClip: false,
      AddToCart : []
    }
  }

  ShowAllMemo

  onOpenAndClose = status => {
    this.setState({
        status: !status
    });
};

  // componentWillMount(){
  //   if(localStorage && localStorage.getItem('AddToCart')){
  //     var AddToCart = JSON.parse(localStorage.getItem('AddToCart'));
  //     this.setState({
  //       AddToCart: AddToCart
  //     });
  //   }
  // }

  // AddCreateNew = () =>{
  //   var AddToCart = [
  //     {
  //       id:1,
  //       name:'binh',
  //       status:true
  //     },
  //   ];
  //   this.setState({
  //     AddToCart : AddToCart
  //   });
  //   localStorage.setItem('AddToCart', JSON.stringify(AddToCart));
  // }

  render() {
    return (
      <div className="menu-left">
        <Link className="create-link" to="/new">
          <button className="create-new">
            <img src="\img\cong.svg" alt="cong"></img>
            <span>Create New</span>
          </button>
        </Link>
        <Link to="/" className="all-link">
          <div className="all-note" onClick={()=> this.props.ShowAllMemo()}>
            <img src="\img\sticky-note-solid.svg" alt="Allnote" />
            <span>All note</span>
            <div className="quantity">10</div>
          </div>
        </Link>
        <div className="category" 
            onClick={() =>
              this.onOpenAndClose(this.state.status)
            }
        >
          <img src="\img\tags-solid.svg" alt="tags" />
          <p>Category</p>
        </div>
        <div className="category-list">
          <div className="category-item">
            <img src="\img\tag1.svg" alt="tags" />
            <p>Category-01</p>
            <div className="quantity">10</div>
          </div>
        </div>
        <div className="clip">
          <img src="\img\paperclip1-solid.svg" />
          <span>Clip</span>
          <div className="quantity">10</div>
        </div>
        <div className="btn-del">
          <img src="\img\del.svg" />
          <span>Delete</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      // data: state.getCategory,
      datas: state.fetchAllDataMemo
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
      // showAllClip : ()=>{
      //     dispatch(actShowAllClip());
      // },
      ShowAllMemo : ()=>{
          dispatch(actShowAllMemo());
      },
      showCategoryWhenClicked : (item)=>{
          dispatch(actShowCategory(item));
      }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuLeft);