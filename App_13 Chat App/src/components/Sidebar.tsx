// import React from "react";
import PropTypes from "prop-types";

const Sidebar = (props: {users: Users}): JSX.Element => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {props.users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
      {/* {console.log(props.users)} */}
    </ul>
  </aside>
);

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Sidebar;
