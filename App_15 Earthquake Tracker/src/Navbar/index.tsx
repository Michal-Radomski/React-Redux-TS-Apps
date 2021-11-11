import React from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav} from "reactstrap";
import DropdownList from "./DropdownList";
import NavBarForm from "./NavbarForm";

const brandStyle = {color: "#ffffff"};

const NavBar: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand style={brandStyle}>Earthquakes Worldwide</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <DropdownList />
            <NavBarForm />
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
