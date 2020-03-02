import React, { Component } from "react";
import './MenuLeft.css';
import {Link} from "react-router-dom";
class MenuLeft extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      AddToCart : []
    }
  }

  componentWillMount(){
    if(localStorage && localStorage.getItem('AddToCart')){
      var AddToCart = JSON.parse(localStorage.getItem('AddToCart'));
      this.setState({
        AddToCart: AddToCart
      });
    }
  }

  AddCreateNew = () =>{
    var AddToCart = [
      {
        id:1,
        name:'binh',
        status:true
      },
    ];
    this.setState({
      AddToCart : AddToCart
    });

    localStorage.setItem('AddToCart', JSON.stringify(AddToCart));
  }


  render() {
    return (
      <div className="menu-left">
        <Link to="/new">
        <button className="create-new" onClick = { this.AddCreateNew}>
          <img src="\img\cong.svg" alt="cong"></img>
          <span>Create New</span>
        </button>
        </Link>
        <div className="all-note">
          <img src="\img\sticky-note-solid.svg" alt="Allnote" />
          <span>All note</span>
          <div className="quantity">10</div>
        </div>
        <div className="category">
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
      </div>
    );
  }
}

export default MenuLeft;
