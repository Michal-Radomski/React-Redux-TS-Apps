import {makeStyles} from "@material-ui/core/styles";

const financialItemStyle = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default financialItemStyle;
