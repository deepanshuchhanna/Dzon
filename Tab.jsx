import React from "react";
//import Button from "@material-ui/core/Button";
//import Button from "@material-ui/core/ButtonGroup";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

export default function BasicButtonGroup() {
  // const classes = useStyles();

  return (
    <div>
      {/* // <div className={classes.root}> */}
      {/* <Button variant="text" color="primary" aria-label="text primary button "> */}
      <button className="btn">
        <span className="header_optionLineOne">Hello Guest</span>
        <span className="header_optionLineTwo"> Sign In</span>
      </button>
      <button className="btn">
        <span className="header_optionLineOne">Return</span>
        <span className="header_optionLineTwo"> &Orders</span>
      </button>
      <button className="btn">
        <span className="header_optionLineOne">Your</span>
        <span className="header_optionLineTwo"> Prime</span>
      </button>
      {/* </Button> */}
    </div>
  );
}

/*className="header_optionLineOne" */

/*className="header_optionLineTwo" */
