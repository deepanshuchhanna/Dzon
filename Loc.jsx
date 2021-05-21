import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
//import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from "@material-ui/core/InputBase";
//import { grey } from "@material-ui/core/colors";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid lightgrey",
    fontSize: 16,
    padding: "2px 10px 10px 14px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      //borderColor: "#80bdff",
      boxShadow: "grey",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Country</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={country}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>🇮🇳</MenuItem>
          <MenuItem value={2}>🇦🇺</MenuItem>
          <MenuItem value={3}>🇺🇸</MenuItem>
          <MenuItem value={4}>🇳🇵</MenuItem>
          <MenuItem value={5}>🇿🇦</MenuItem>
          <MenuItem value={6}>🇨🇦</MenuItem>
          <MenuItem value={7}>🇳🇿</MenuItem>
          <MenuItem value={8}>🇵🇰</MenuItem>
          <MenuItem value={9}>🇮🇩</MenuItem>
          <MenuItem value={10}>🇰🇵</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
