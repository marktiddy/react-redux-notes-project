import React, { Component } from "react";
import { connect } from "react-redux";
import { removeNote } from "../redux/actions/actions";

class AllNotes extends Component {
  //Function to call in order to call our action from individual buttons
  removeNote = index => {
    this.props.removeNote(index);
  };
  render() {
    console.log("render running");
    //Map the notes from our props notes object settin the index as the key and passing it into the remove note function on click
    const notesItems = this.props.notes.map((note, index) => (
      <li key={index}>
        <b>{note.title}</b>
        <button onClick={() => this.removeNote(index)}>x</button>
        <br />
        <span>{note.content}</span>
      </li>
    ));

    //Show the notes items we just created
    return (
      <React.Fragment>
        <h3>All Notes</h3>
        <ul>{notesItems}</ul>
      </React.Fragment>
    );
  }
}

//The connect below will need both mapStateToProps and mapDispatchToProps functions
//This is because we want to display when a new note is added or deleted and map
//the deleteNote action to our props because we'll need that to dispatch an action

//We set out two map properties first to make life easier in the statement

//this says we want to keep an eye on the props state in our store
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

//This says we want to be able to dispatch actions
const mapDispatchToProprs = {
  removeNote: removeNote
};

//String it all together
export default connect(mapStateToProps, mapDispatchToProprs)(AllNotes);
