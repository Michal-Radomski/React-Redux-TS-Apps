import React from "react";
import {connect} from "react-redux";
import "./App.scss";

class App extends React.Component<{dispatch: AppDispatch; posts: Posts}, {value: string; postId: number}> {
  constructor(state: State | any) {
    super(state);
    this.state = {
      value: "",
      postId: -2,
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.props.dispatch({
          type: "LOAD_POSTS",
          payload: json,
        });
      });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({value: event.target.value});
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    // alert("Content submitted: " + this.state.value);
    event.preventDefault();
    this.props.dispatch({
      type: "ADD_POST",
      payload: {id: this.state.postId, title: this.state.value},
    });

    this.setState({postId: this.state.postId - 1});
  };

  render() {
    return (
      <React.Fragment>
        App:
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <div>
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </form>
        <ul>
          {this.props.posts.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {posts: state.posts};
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
