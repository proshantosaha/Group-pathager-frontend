const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        data: action.result,
        isLoading: false,
        error: "",
      };

    case "API_ERROR":
      return {
        data: "",
        isLoading: false,
        isError: true,
      };
    case "SET_SINGLE":
      return {
        singleProduct: action.result,
        singleLoading: false,
        error: "",
      };
    case "SINGLE_ERROR":
      return {
        singleProduct: "",
        singleLoading: false,
        isError: true,
      };
    default:
      return { state };
  }
};

export default ProductReducer;
