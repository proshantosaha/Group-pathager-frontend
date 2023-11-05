const filterReducer = (state, action) => {
  switch (action.type) {
    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log(sort_value)

      return {
        ...state,
        data: action.result,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortData = [...action.result];

      if (data.sort_value === "highest") {
        const sortingData = (a, b) => {
          return b.price - a.price;
        };
        newSortData = tempSortData.sort(sortingData);
      }

      if (data.sort_value === "lowest") {
        const sortingData = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempSortData.sort(sortingData);
      }

      if (data.sort_value === "a-z") {
        newSortData = tempSortData.sort((a, b) => a.name.localCompare(b.name));
      }
      if (data.sort_value === "z-a") {
        newSortData = tempSortData.sort((a, b) => b.name.localCompare(a.name));
      }

      return {
        ...state,
        data: newSortData,
      };

    default:
      return {
        state,
      };
  }
};

export default filterReducer;
