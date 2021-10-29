// import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";

const MessagesList = (props: {messages: IMessages}): JSX.Element => (
  <section id="messages-list">
    <ul>
      {props.messages.map((message: IMessage) => (
        <Message key={message.id} {...message} />
      ))}
      {/* {console.log(props.messages)} */}
    </ul>
  </section>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MessagesList;
