import { IAction } from '~/rootReducer';

export function createStore(rootReducer: any, initialState: any) {
  let state = rootReducer(initialState, { type: '__INIT__' });
  const subscribers: any[] = [];

  return {
    dispatch(action: IAction) {
      state = rootReducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(callback: any) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}
