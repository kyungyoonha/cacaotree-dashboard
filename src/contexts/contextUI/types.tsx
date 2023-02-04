import { Dayjs } from "dayjs";

export interface State {
  menuOpen: boolean;
  filterBookingDate: Dayjs;
  filterColumnOption: string;
  onOpenMenu: typeof onOpenMenu;
  onChangeFilterBookingDate: typeof onChangeFilterBookingDate;
  onChangeFilterColumnOption: typeof onChangeFilterColumnOption;
  dispatch: React.Dispatch<Action>;
}

export enum ActionType {
  OPEN_MENU,
  CHANGE_FILTER_BOOKING_DATE,
  CHANGE_FILTER_COLUMN_OPTION,
}

export type Action =
  | {
      type: typeof ActionType.OPEN_MENU;
      payload: boolean;
    }
  | {
      type: typeof ActionType.CHANGE_FILTER_BOOKING_DATE;
      payload: Dayjs;
    }
  | {
      type: typeof ActionType.CHANGE_FILTER_COLUMN_OPTION;
      payload: string;
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.OPEN_MENU:
      return {
        ...state,
        menuOpen: action.payload,
      };

    case ActionType.CHANGE_FILTER_BOOKING_DATE:
      return {
        ...state,
        filterBookingDate: action.payload,
      };
    case ActionType.CHANGE_FILTER_COLUMN_OPTION:
      return {
        ...state,
        filterColumnOption: action.payload,
      };
  }
};

export const onOpenMenu = (data: boolean, dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionType.OPEN_MENU,
    payload: data,
  });
};

export const onChangeFilterBookingDate = (
  date: Dayjs,
  dispatch: React.Dispatch<Action>
) => {
  dispatch({
    type: ActionType.CHANGE_FILTER_BOOKING_DATE,
    payload: date,
  });
};

export const onChangeFilterColumnOption = (
  data: string,
  dispatch: React.Dispatch<Action>
) => {
  dispatch({
    type: ActionType.CHANGE_FILTER_COLUMN_OPTION,
    payload: data,
  });
};
