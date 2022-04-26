export const setName: any = (data: any) => {
  return async (dispatch: DispatcType) => {
    dispatch({payload: data, type: 'SET_NAME'});
  };
};
