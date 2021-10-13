import React from "react";

class App extends React.Component<{}, {name: string}> {
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
    console.log(this.state.name);
    this.setState({name: ""});
  };

  render() {
    return (
      <div>
        <h1>Client-Side Contacts Application</h1>
        <hr />
        {/* <ul>
          {this.props.contacts.map((contact, i) => <li key={i}>{contact.name}</li> )}
        </ul> */}
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
