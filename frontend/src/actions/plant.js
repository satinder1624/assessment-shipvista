import api from "./api";

export const ACTION_TYPES = {
  UPDATE: "UPDATE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => {
  return (dispatch) => {
    // get api request
    api
      .plant()
      .fetchAll()
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.FETCH_ALL,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const update = (id, data, onSuccess) => (dispatch) => {
  api
    .plant()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: { id, ...data },
      });
      onSuccess();
    })
    .catch((err) => {
      console.log(err);
    });
};
