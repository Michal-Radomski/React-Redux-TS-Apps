import {makeStyles, Theme} from "@material-ui/core/styles";

const financialItemStyle = makeStyles((theme: Theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default financialItemStyle;
