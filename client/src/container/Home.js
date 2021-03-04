// React
import { React } from "react";
//Redux
import { useSelector, shallowEqual } from "react-redux";
// Material Ui
import { GridList, GridListTile, makeStyles } from "@material-ui/core";
// Components
import Category from "../widgets/Category";
// Custom Styling
import "../css/categories.css";
// Data Model
import "../models/CategoryModel";
import Items from "../components/Items";
// -----------------

export default function Home() {
  let categories = useSelector((state) => state.posts, shallowEqual);
  let categoriess = categories["categories"];

  if (categoriess) {
    return (
      <div>
        <div style={{ marginBottom: "10vh" }}>
          <GridList cols={12} id="scrollable-list">
            {categoriess.map((category) => (
              <GridListTile key={category.id} cols={3}>
                <Category category={category} />
                {/* <img src={tile.img} alt={tile.title} className="scrollable-image" />
              <GridListTileBar title={tile.title} /> */}
              </GridListTile>
            ))}
          </GridList>
        </div>
        {/* {
          (categories.selected = 0 ? null : (
            <Items items={categories[categories.selected].items} />
          ))
        } */}
        <Items items={categoriess[categories["selected"]]["item"]} />
      </div>
    );
  } else return <div>Loading Data ...</div>;
}
