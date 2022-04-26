const initialState: IMain = {
  name: '',
  picture: '',
};

const MainReducer: any = (
  state: IMain = initialState,
  action: TAction,
): IMain => {
  const {payload, type} = action;
  switch (type) {
    case 'SET_NAME':
      return {
        ...state,
        name: payload.name,
        picture: payload.picture,
      };

    default:
      return state;
  }
};

export default MainReducer;
