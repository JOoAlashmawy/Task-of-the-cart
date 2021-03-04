// React
import React, { Component } from "react";
// Material Ui
import Card from "@material-ui/core/Card";
import { CardMedia, CardContent, Typography } from "@material-ui/core";
// Custom CSS
import "../css/categories.css";
// -------------------

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { category: props.category };
  }
  componentDidMount() {
    this.setState({
      category: this.props.category,
    });
  }
  render() {
    let category = this.state.category;
    return (
      <Card>
        <CardMedia
          component="img"
          alt={category.title}
          height="100vh"
          image={category.img}
          title={category.name}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {category.name}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Category;
