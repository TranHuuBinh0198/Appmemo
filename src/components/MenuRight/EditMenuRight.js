import React, { Component } from "react";
import "./EditMenuRight.css";
import {connect} from "react-redux";
import * as actions from "../../actions/index";
class EditMenuRight extends Component {
  constructor(props) {
    super(props);

    this.state = {
        categoryDate: null,
        categoryName: "",
        titleMemo: "",
        contentMemo: "",
    };
  }

  handleChange = (event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
        [name]: value
    });
    this.props.SaveDatatoStore(this.state)
};

  render() {
    var { categoryDate, categoryName, titleMemo, contentMemo } = this.state;
    return (
        <div className="menu-right-new">
            <h1>Add Note</h1>
            <form>
                <div className="menu-right-main-new">
                    <b>Add Title Note</b>
                    <input
                        type="text"
                        name="titleMemo"
                        placeholder="fill in the title"
                        onChange={e => {
                            this.handleChange(e);
                        }}
                        value={titleMemo}
                        ></input>
                </div>
                <div className="menu-right-main-new">
                    <b>Add Date Note</b>
                    <input
                        type="date"
                        name="categoryDate"
                        onChange={e => {
                            this.handleChange(e);
                        }}
                        value={categoryDate}
                        ></input>
                </div>
                <div className="menu-right-main-new">
                    <b>Add Category Note</b>
                    <input
                        type="text"
                        name="categoryName"
                        placeholder="fill in the category"
                        onChange={e => {
                            this.handleChange(e);
                        }}
                        value={categoryName}
                        ></input>
                </div>
                <div className="menu-right-main-new">
                    <b>Add Content Note</b>
                    <textarea
                        type="text"
                        name="contentMemo"
                        onChange={e => {
                            this.handleChange(e);
                        }}
                        value={contentMemo}
                        ></textarea>
                </div>
            </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        SaveDatatoStore: dataAdd => {
            dispatch(actions.actSaveDatatoStore(dataAdd));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMenuRight);

