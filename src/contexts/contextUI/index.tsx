import React, { useMemo, ReactNode } from "react";
import { State, reducer, onOpenMenu } from "./types";

const initialState: State = {
  menuOpen: false,
  onOpenMenu: onOpenMenu,
};

export const UIContext = React.createContext<State>(initialState);
UIContext.displayName = "UIContext";

type Props = {
  children?: ReactNode | undefined;
  props?: any;
};

export const UIContextProvider = ({ children, ...props }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);

  return (
    <UIContext.Provider value={value} {...props}>
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  const context = React.useContext(UIContext);

  if (context === undefined) {
    throw new Error("useUIContext must be used within a UIContextProvider");
  }
  return context;
};
