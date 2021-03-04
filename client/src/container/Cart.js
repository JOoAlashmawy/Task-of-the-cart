import { React } from "react";

import { useSelector } from "react-redux";

export default function Cart(args) {
  const cart = useSelector((state) => state.cart);
  const { totalPrice } = cart;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);
  return <h1 id="cart">Total Price:{totalPrice}</h1>;
}
