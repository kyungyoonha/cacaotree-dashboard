import { Dayjs } from "dayjs";

export interface State {
  menuOpen: boolean;
  bookingFilterDate: Dayjs;
  onOpenMenu: typeof onOpenMenu;
  onChangeBookingFilterDate: typeof onChangeBookingFilterDate;
  dispatch: React.Dispatch<Action>;
}

export enum ActionType {
  OPEN_MENU,
  CHANGE_BOOKING_FILTER_DATE,
}

export type Action =
  | {
      type: typeof ActionType.OPEN_MENU;
      payload: boolean;
    }
  | {
      type: typeof ActionType.CHANGE_BOOKING_FILTER_DATE;
      payload: Dayjs;
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.OPEN_MENU:
      return {
        ...state,
        menuOpen: action.payload,
      };

    case ActionType.CHANGE_BOOKING_FILTER_DATE:
      return {
        ...state,
        bookingFilterDate: action.payload,
      };
  }
};

export const onOpenMenu = (data: boolean, dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionType.OPEN_MENU,
    payload: data,
  });
};

export const onChangeBookingFilterDate = (
  date: Dayjs,
  dispatch: React.Dispatch<Action>
) => {
  dispatch({
    type: ActionType.CHANGE_BOOKING_FILTER_DATE,
    payload: date,
  });
};
