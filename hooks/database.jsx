// use local storage as your db for now
const addToDb = (id) => {
    const exists = TravelDb();
    let add_cart = {};
    if (!exists) {
      add_cart[id] = 1;
    } else {
      add_cart = JSON.parse(exists);
      if (add_cart[id]) {
        const newCount = add_cart[id] + 1;
        add_cart[id] = newCount;
      } else {
        add_cart[id] = 1;
      }
    }
    updateDb(add_cart);
  };
  
  const TravelDb = () => localStorage.getItem("add_cart");
  const updateDb = (cart) => {
    localStorage.setItem("add_cart", JSON.stringify(cart));
  };
  
  const deleteFromDb = (id) => {
    const exists = TravelDb();
    if (!exists) {
    } else {
      const add_cart = JSON.parse(exists);
      delete add_cart[id];
      updateDb(add_cart);
    }
  };
  
  const getStoredBook = () => {
    const exists = TravelDb();
    return exists ? JSON.parse(exists) : {};
  };
  
  const clearTheBooking = () => {
    localStorage.removeItem("add_cart");
  };
  
  export {
    addToDb,
    deleteFromDb,
    clearTheBooking,
    getStoredBook,
  };
  