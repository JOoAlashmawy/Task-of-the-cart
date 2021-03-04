import { React, useState } from "react";
// Redux
import { useDispatch, shallowEqual, useSelector } from "react-redux";
// Reducers { addItem, reduceItem }
import * as allActions from "../actions/cart";
// Material UI
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
// -------------------

export default function Item(args) {
  const [amount, setAmount] = useState(0);
  useSelector((state) => state.cart, shallowEqual);

  const dispatch = useDispatch();
  let item = args["item"];

  // useEffect(() => {
  //   dispatch(allActions.userActions.setUser(user))
  // }, [])

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item.name}
          height="140"
          image={item.img}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography gutterBottom>{item.price} جنية</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Button
            size="small"
            style={{ color: "green", fontWeight: "bold" }}
            onClick={() => {
              setAmount(amount + 1);
              dispatch(allActions.addItem(item));
            }}
          >
            1+
          </Button>
          <div> </div>
          <Button
            style={{ color: "#d00000", fontWeight: "bold" }}
            size="small"
            onClick={() => {
              if (amount > 0) {
                setAmount(amount - 1);
                dispatch(allActions.reduceItem(item));
              }
            }}
          >
            1-
          </Button>
        </div>
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            {amount}
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
}
