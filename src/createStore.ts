export function createStore(rootReducer: any, initialState: any) {
  let state = rootReducer();
  const subscribers: any[] = [];

  return {
    dispatch(action: any) {
      rootReducer(state, action);
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
