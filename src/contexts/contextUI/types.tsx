export interface State {
  menuOpen: boolean;
  onOpenMenu: typeof onOpenMenu;
}

export enum ActionType {
  OPEN_MENU,
}

export type Action = {
  type: typeof ActionType.OPEN_MENU;
  payload: boolean;
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.OPEN_MENU:
      return {
        ...state,
        menuOpen: action.payload,
      };
  }
};

export const onOpenMenu = (data: boolean, dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionType.OPEN_MENU,
    payload: data,
  });
};
