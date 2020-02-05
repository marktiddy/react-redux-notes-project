import React, { Component } from "react";
//Because we need to use the connect function to pass the action across
import { connect } from "react-redux";

function NewModule(props) {
  return <h1>Hello World</h1>;
}

const mapState 

export default connect(mapState)(NewModule);
