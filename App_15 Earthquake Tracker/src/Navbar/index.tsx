import React from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav} from "reactstrap";
import DropdownList from "./DropdownList";
import NavBarForm from "./NavbarForm";

const NavBar: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand style={{color: "white", float: "left"}}>Earthquakes Worldwide</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <DropdownList />
            <NavBarForm />
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
