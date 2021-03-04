/* eslint-disable import/no-anonymous-default-export */
export default (cart = { totalPrice: 0 }, action) => {
  switch (action.type) {
    case "AddItem":
      cart[action.payload.id] =
        cart[action.payload.id] != null ? cart[action.payload.id] + 1 : 1;
      cart["totalPrice"] =
        cart["totalPrice"] != null
          ? cart["totalPrice"] + action.payload.price
          : action.payload.price;
      console.log("Item Added Successfull. \n", cart);
      document.getElementById("cart").innerText =
        "Total Price:" + cart["totalPrice"];
      return cart;

    case "RemoveItem":
      if (cart[action.payload.id] != null) {
        cart[action.payload.id] = cart[action.payload.id] - 1;
        cart["totalPrice"] = cart["totalPrice"] - action.payload.price;
      }
      document.getElementById("cart").innerText =
        "Total Price:" + cart["totalPrice"];
      return cart;

    default:
      return cart;
  }
};
