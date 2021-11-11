import React from "react";
import {useDispatch} from "react-redux";
import InfoTip from "./InfoTip";
import {changeStartTime, changeEndTime, changeNumOfDays} from "../actions";
import styles from "./index.module.scss";

const NavBarForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");
  const [startTimeTooltipOpen, setStartTimeTooltipOpen] = React.useState(false);
  const [endTimeTooltipOpen, setEndTimeTooltipOpen] = React.useState(false);
  const [toggleIcon, setToggleIcon] = React.useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // clear dropdown default value
    dispatch(changeNumOfDays("Select Period"));
    // pass the query params to be able to perform query
    dispatch(changeStartTime(startTime));
    dispatch(changeEndTime(endTime));
    // clear start end input values
    setStartTime("");
    setEndTime("");
  };

  const changeIcon = (): void => setToggleIcon(!toggleIcon);

  const onStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStartTime(event.target.value);
  };

  const onEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEndTime(event.target.value);
  };

  return (
    <form className={`form-inline my-lg-0 ${styles.form}`} onSubmit={onSubmit}>
      <div className={`input-group ${styles.startTime}`}>
        <input
          className="form-control"
          id="startTime"
          type={toggleIcon ? "text" : "date"}
          aria-label="Search"
          value={startTime}
          onChange={onStartTimeChange}
        />
        <div className="input-group-append mr-sm-2">
          <span className="input-group-text">
            <i
              className={`${styles.fa} fa fa-${toggleIcon ? "calendar" : "pencil"}`}
              tabIndex={0}
              aria-label="Mute volume"
              role="button"
              onClick={changeIcon}
              onKeyDown={() => {}}
            />
          </span>
        </div>
      </div>
      <InfoTip target="startTime" tooltipOpen={startTimeTooltipOpen} setTooltipOpen={setStartTimeTooltipOpen} />
      <input
        className="form-control mr-sm-2"
        id="endTime"
        type="date"
        disabled={toggleIcon ? true : false}
        aria-label="Search"
        value={endTime}
        onChange={onEndTimeChange}
      />
      <InfoTip target="endTime" tooltipOpen={endTimeTooltipOpen} setTooltipOpen={setEndTimeTooltipOpen} />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default NavBarForm;
