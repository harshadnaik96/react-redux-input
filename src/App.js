import React from "react";
import "./App.css";

import * as actionType from "./store/actions";
import { connect } from "react-redux";

import { TextField } from "@material-ui/core";

const App = (props) => {
  //console.log(props);
  const { txt, onText } = props;

  return (
    <div className="main">
      <h1>Text : {txt}</h1>
      <TextField
        id="text"
        type="text"
        value={txt}
        label="Enter text"
        onChange={onText}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    txt: state.text,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onText: (e) =>
      dispatch({ type: actionType.TEXT, payload: { txt: e.target.value } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
