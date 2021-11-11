import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

import {changeStartTime, changeNumOfDays} from "../actions";
import convertDropdownValue from "./utils";
import {periods} from "./constants";

const DropdownList = (): JSX.Element => {
  const numOfDays = useSelector(({navbar}: RootState) => navbar.numOfDays);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const changeDropdownIcon = () => {
    setDropdownOpen((prevState) => (prevState ? false : true));
  };

  const selectNumOfDays = (event: React.MouseEvent<HTMLElement>): void => {
    const dropdownvalue = event.currentTarget.textContent;
    if (dropdownvalue) {
      dispatch(changeNumOfDays(dropdownvalue));
      dispatch(changeStartTime(convertDropdownValue(dropdownvalue)));
    }
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={changeDropdownIcon} direction={dropdownOpen ? "up" : "down"}>
      <DropdownToggle caret>{numOfDays}</DropdownToggle>
      <DropdownMenu>
        {periods.map(({id, name}) => (
          <DropdownItem key={id} onClick={selectNumOfDays}>
            {name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownList;
