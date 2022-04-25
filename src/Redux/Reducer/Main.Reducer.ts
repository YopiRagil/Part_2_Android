import { KEYS } from "../Key";

const initialState: IMain = {
  isLoading:false
};

const MainReducer:any = (state: IMain = initialState, action: TAction): IMain => {
  switch (action.type) {
    case KEYS.LOADING:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
};

export default MainReducer;
