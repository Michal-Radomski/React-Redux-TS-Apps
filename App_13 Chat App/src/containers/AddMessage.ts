import {connect} from "react-redux";
import AddMessageComponent from "../components/AddMessage";
import {addMessage} from "../actions";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  dispatch: (message: string, author: string) => {
    dispatch(addMessage(message, author));
  },
});

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent);
