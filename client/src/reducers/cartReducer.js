export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          title: action.cart.title,
          photo: action.cart.photo,
          price: action.cart.price,
          id: action.cart.id,
          quantity: action.cart.quantity,
        },
      ];
    case "SET_ITEM":
      return [
        {
          title: action.cart.title,
          photo: action.cart.photo,
          price: action.cart.price,
          id: action.cart.id,
        },
      ];
    case "DELETE_ITEM":
      return state.filter((cart) => cart.id !== action.id);
    case "INC_QTY":
      return { ...state, count1: state.count1 + 1 };

    default:
      return state;
  }
};
export const ncartReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEM":
      state = action.id;
      return state;

    default:
      return state;
  }
};
