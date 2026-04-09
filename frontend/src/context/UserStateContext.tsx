import { createContext, useReducer, useContext, ReactNode } from "react";

interface User { age: number; name: string; email: string; }
export enum ActionType { UPDATE_NAME = "UPDATE_NAME", UPDATE_EMAIL = "UPDATE_EMAIL", UPDATE_AGE = "UPDATE_AGE" }
type Action = { type: ActionType; payload: any };

function reducer(state: User, action: Action): User {
  switch (action.type) {
    case ActionType.UPDATE_NAME: return { ...state, name: action.payload };
    case ActionType.UPDATE_EMAIL: return { ...state, email: action.payload };
    case ActionType.UPDATE_AGE: return { ...state, age: action.payload };
    default: return state;
  }
}

const UserStateContext = createContext<{ state: User; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const UserStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { age: 30, name: "John", email: "john@gmail.com" });
  return (
    <UserStateContext.Provider value={{ state, dispatch }}>
      {children}
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const context = useContext(UserStateContext);
  if (!context) throw new Error("useUserState must be used within a UserStateProvider");
  return context;
};