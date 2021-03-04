export const addItem = (data) => async (dispatch) => {
  try {
    dispatch({ type: "AddItem", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const reduceItem = (data) => async (dispatch) => {
  try {
    dispatch({ type: "RemoveItem", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
