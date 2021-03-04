// React
import React from "react";
// Material Ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// Custome Styling
import "./css/appbar.css";
// -----------------

function Appbar() {
  return (
    <AppBar position="relative" elevation={0} style={{ marginBottom: "2vh" }}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="secondary">
          حلويات ظروف
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Appbar;
