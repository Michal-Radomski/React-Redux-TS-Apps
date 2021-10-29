// import React from "react";
import PropTypes from "prop-types";

const AddMessage = (props: {dispatch: AppDispatch}) => {
  let input: HTMLElement | any;

  return (
    <section id="new-message">
      <input
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            props.dispatch(input.value, "Me");
            input.value = "";
          }
        }}
        type="text"
        ref={(node) => {
          input = node;
          // console.log(input);
        }}
      />
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AddMessage;
