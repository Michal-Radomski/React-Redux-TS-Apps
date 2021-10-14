import React from "react";
import {connect} from "react-redux";
import * as contactAction from "./actions/contactAction";

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
    };
  }

  //- Wersja bez konstruktora
  // state:State={name: ""}

  handleChange = (event: React.FormEvent<HTMLInputElement> | any) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(this.state["name"]);
    this.props.createContact(contact);
    this.setState({name: ""});
  };

  listView(data: Contact, index: ID) {
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
      </div>
    );
  }

  deleteContact(event: React.SyntheticEvent, index: ID) {
    event.preventDefault();
    this.props.deleteContact(index);
  }

  render() {
    return (
      <div className="container">
        <h1>Client-Side Contacts Application</h1>
        <hr />
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name} />
            <br />
            <input type="submit" className="btn btn-success" value="ADD" />
          </form>
          <hr />
          {<ul className="list-group">{this.props.contacts.map((contact: Contact, i: ID) => this.listView(contact, i))}</ul>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State, _ownProps: OwnProps) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createContact: (contact: Contact) => dispatch(contactAction.createContact(contact)),
    deleteContact: (index: ID) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
