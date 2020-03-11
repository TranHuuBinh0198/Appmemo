import React, { Component } from "react";
import MenuLeft from "../../components/MenuLeft/MenuLeft";
import MenuMain from "../../components/MenuMain/MenuMain";
import MenuRightHeader from "../../components/MenuHeader/MenuRightHeader";
// import MenuRight from "../../components/MenuRight/MenuRight";
// import TaskForm from "../../components/MenuRight/TaskForm";

import routes from "../../router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";


class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks : [],
      keyword : ''
    }
  }
  showContentPage = routes => {
    var rs = null;
    if (routes.length > 0) {
        rs = routes.map((route, index) => { 
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            );
        });
    }
    return <Switch>{rs}</Switch>;
  };
  onSearch =(keyword)=>{
    this.setState({
      keyword : keyword
    });
  }
  render() {
    // var { tasks, keyword} = this.state;

    return <div className="wrapper">
        <Router>
          <MenuLeft />
          <MenuMain onSearch ={this.onSearch} />
          <div className= "Menu-right-body">
            < MenuRightHeader />
            <Switch>
              {this.showContentPage(routes)}
            </Switch>
          </div>
        </Router>
    </div>;
  }
}

export default HomePage;
