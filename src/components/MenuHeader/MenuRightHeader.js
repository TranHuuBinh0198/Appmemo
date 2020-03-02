import React, { Component } from 'react'
import './MenuRightHeader.css';
import{connect } from "react-redux";
import * as actions from "../../actions/index";
class MenuRightHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }


  Save=(data)=>{
    this.props.saveMemo(data)
  }

  render() {
    return (
      <div className="menu-right-header">
          <div className="menu-right-header-btn">
            <button><img src="\img\pen-solid.svg" alt="pen" />&nbsp;&nbsp;Edit</button>
            <button onClick={()=>this.Save(this.props.data)}><img src="\img\save-solid.svg" alt="save" />&nbsp;&nbsp;Save</button>
            <button><img src="\img\paperclip-solid.svg" alt="clips" />&nbsp;&nbsp;Clips</button>
          </div>
          <div className="menu-right-header-btn-del">
            <button><img src="\img\detete.svg" alt="del" />&nbsp;&nbsp;Delete</button>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data : state.saveMemo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveMemo: (data) => {
      dispatch(actions.actAddMemo(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuRightHeader);


// export default MenuRightHeader
