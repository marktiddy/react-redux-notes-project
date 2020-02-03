import React, { Component } from "react";
import NotesForm from "../notes-form/notes-form";
import AllNotes from "../all-notes/all-notes";

export default class Notes extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>React Redux Notes App</h1>
        <NotesForm />
        <hr />
        <AllNotes />
      </React.Fragment>
    );
  }
}
