import { ACTION_TYPES } from "../actions/plant";

const initialState = {
  list: [],
};

export const plant = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        list: [...action.payload],
      };

    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        list: state.list.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };

    default:
      return state;
  }
};
