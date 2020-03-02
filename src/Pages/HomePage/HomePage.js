import React, { Component } from "react";
import MenuLeft from "../../components/MenuLeft/MenuLeft";
import MenuMain from "../../components/MenuMain/MenuMain";
import MenuRightHeader from "../../components/MenuHeader/MenuRightHeader";
// import MenuRight from "../../components/MenuRight/MenuRight";
// import EditMenuRight from "../../components/MenuRight/EditMenuRight";

import routes from "../../router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class HomePage extends Component {
  render() {
    return <div className="wrapper">
      <Router>
        <MenuLeft />

        < MenuMain />
        <div className= "Menu-right-body">
        < MenuRightHeader />
        <Switch>
          {this.showContentPage(routes)}
        </Switch>
        </div>

      </Router>
    </div>;
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
}

export default HomePage;
