type TAction = {
  type: string;
  payload: any;
};

type DispatcType = (args: TAction | Function) => TAction;

interface IState {
  
}

interface IMain {
    isLoading: boolean
}

