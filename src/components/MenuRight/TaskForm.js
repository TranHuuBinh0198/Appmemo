import React, { Component } from "react";
import "./TaskForm.css";
import {connect} from "react-redux";
import * as actions from "../../actions/index";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Date: null,
        category: "",
        title: "",
        content: "",
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
    var { Date, category, title, content } = this.state;
    return (
        <div className="menu-right-new">
            <h1>Add Note</h1>
            <form>
                <div className="menu-right-main-new">
                    <b>Add Title Note</b>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter a title"
                        onChange={e => {
                            this.handleChange(e);
                        }}
                        value={title || ""}
                    ></input>
                </div>
                <div className="menu-right-main-new">
                    <b>Add Date Note</b>
                    <input
                        type="date"
                        name="Date"
                        onChange={e => {
                            this.handleChange(e);
                        }}
                        value={Date || ""}
                    ></input>
                </div>
                <div className="menu-right-main-new">
                    <b>Add Category Note</b>
                    <input
                        type="text"
                        name="category"
                        placeholder="Enter the category"
                        onChange={e => {
                            this.handleChange(e);
                        }}
                        value={category || ""}
                    ></input>
                </div>
                <div className="menu-right-main-new">
                    <b>Add Content Note</b>
                    <textarea
                        type="text"
                        name="content"
                        onChange={e => {
                            this.handleChange(e);
                        }}
                        value={content || ""}
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);

