import React, { Component } from "react";
//Because we need to use the connect function to pass the action across
import { connect } from "react-redux";
//Import our action
import { addNote } from "../redux/actions/actions";

class NotesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleChange = e => {
    //Set the content of the relevant text box to the relavent state name e.g. title to title
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = e => {
    e.preventDefault();
    //Create two new constants from the state
    let { title, content } = this.state;
    //User our imported addNote function from actions to create a new addNote action.
    //This will be passed automatically using connect later on!
    this.props.addNote(title, content);
    //Reset our state
    this.setState({ title: "", content: "" });
  };

  render() {
    return (
      <React.Fragment>
        <h3>Add a Note</h3>
        <form onSubmit={this.handleSubmission}>
          Title: <br />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          Content: <br />
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <button type="submit">Add Note</button>
        </form>
      </React.Fragment>
    );
  }
}

//Use our connect function
export default connect(
  null, //We dont care about the state that's returned
  {
    //This is our mapDispatchToProps parameter because we want to access our props. We map the addNote action creator function
    //Connect dispatches our action to the store
    addNote: addNote
  }
)(NotesForm);
