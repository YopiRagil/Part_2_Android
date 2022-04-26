type TAction = {
  type: string;
  payload: any;
};

type DispatcType = (args: TAction | Function) => TAction;

interface IState {
  main: IMain;
}

interface IMain {
  name: string;
  picture: string;
}
