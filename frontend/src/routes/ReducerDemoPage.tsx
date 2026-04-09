import UserStateWidget from "@/components/ui/userStateWidget/userStateWidget";
import { ActionType, useUserState } from "@/context/UserStateContext";

export default function ReducerDemoPage() {
  const { state, dispatch } = useUserState();

  
  return <UserStateWidget
    state={state}
    onUpdateName={(name) => dispatch({ type: ActionType.UPDATE_NAME, payload: name })}
    onUpdateEmail={(email) => dispatch({ type: ActionType.UPDATE_EMAIL, payload: email })}
    onUpdateAge={(age) => dispatch({ type: ActionType.UPDATE_AGE, payload: age })}
  />;
}
