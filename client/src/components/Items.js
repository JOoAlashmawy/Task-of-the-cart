// React
import { React } from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
// Widgets
import Item from "./../widgets/Item";

export default function Items(args) {
  let items = args["items"];
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={4} key={item["id"]}>
          <Item item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
