import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
//import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(5),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [Categories, setCategories] = React.useState("");

  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-autowidth-label">
          All Categories
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Categories}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Deals</MenuItem>
          <MenuItem value={2}>Womens</MenuItem>
          <MenuItem value={3}>Mens</MenuItem>
          <MenuItem value={4}>Boys</MenuItem>
          <MenuItem value={5}>Girls</MenuItem>
          <MenuItem value={6}>FootWears</MenuItem>
          <MenuItem value={7}>Watches</MenuItem>
          <MenuItem value={8}>Perfumes</MenuItem>
          <MenuItem value={9}>T-Shirts</MenuItem>
          <MenuItem value={10}>Jeans</MenuItem>
          <MenuItem value={11}>Shirts</MenuItem>
          <MenuItem value={12}>Mobiles</MenuItem>
          <MenuItem value={13}>Laptops</MenuItem>
          <MenuItem value={14}>Others</MenuItem>
        </Select>
        {/* <FormHelperText>A</FormHelperText> */}
      </FormControl>
    </div>
  );
}
