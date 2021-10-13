import React from "react";
import "./App.scss";
import getComments from "./redux/actionCreators/getComments";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./useTypeSelector";

function App() {
  const dispatch = useDispatch();
  const [postId, setPostID] = React.useState("");

  const {comments, loading, error} = useTypedSelector((state) => state.comments);
  if (error) {
    console.log(error);
  }
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(getComments(postId));
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={onSubmitHandler}>
          <input type="number" value={postId} onChange={(e) => setPostID(e.target.value)} />
          <button type="submit"> submit </button>
        </form>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {comments.map((comment: Comment) => {
            return <li key={comment.id}>{comment.body}</li>;
          })}
        </ul>
      )}
    </React.Fragment>
  );
}

export default App;
