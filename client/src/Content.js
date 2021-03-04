// React
import { React, useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
// Components
import { getPosts } from "./actions/posts";
import Categories from "./container/Home";
import Cart from "./container/Cart";

// -----------------

export default function Content() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div style={{ margin: "0px 10px" }}>
      <Cart />
      <Categories />
    </div>
  );
}
