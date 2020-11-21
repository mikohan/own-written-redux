export interface IAction {
  type: string;
}
export interface IState {
  count: number;
}
export function rootReducer(state: number, action: IAction): number {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  }
  return state;
}
