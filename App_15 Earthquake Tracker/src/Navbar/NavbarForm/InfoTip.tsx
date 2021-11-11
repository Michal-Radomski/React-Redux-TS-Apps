import {Tooltip} from "reactstrap";

const InfoTip = ({setTooltipOpen, target, tooltipOpen}: IInfoTip): JSX.Element => {
  const openTooltip = () => setTooltipOpen(!tooltipOpen);
  return (
    <Tooltip placement="bottom" isOpen={tooltipOpen} target={target} toggle={openTooltip}>
      Please insert
      <span>{target === "startTime" ? " start " : " end "}</span>
      date in the form of MM-DD-YYYY
      {target === "startTime" ? " or  NOW - 3days or hours" : ""}
    </Tooltip>
  );
};

export default InfoTip;
