import * as api from "../api/index.js";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log("data loded successfully");
    let fetchedData = {
      categories: data,
      selected: 0,
    };
    dispatch({ type: "FETCH_ALL", payload: fetchedData });
  } catch (error) {
    console.log(error.message);
  }
};
