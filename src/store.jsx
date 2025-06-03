export const initialStore=()=>{
  return{
    message: null,
    favourites:[],
  }
}

export default function storeReducer(store, action = {}) {
   switch (action.type) {
    case "ADD_FAVOURITE":
      if (store.favourites.some((item) => item.id === action.payload.id)) {
        return store;
      }
      return {
        ...store,
        favourites: [...store.favourites, action.payload],
      };

    case "REMOVE_FAVOURITE":
      return {
        ...store,
        favourites: store.favourites.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return store;
  }
}
