function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// let store = createStore(counter);
//
// store.subscribe(() => console.log(store.getState()))
//
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'DECREMENT'});

// redux slightly advanced

// reudcer must always return something
// https://css-tricks.com/learning-react-redux/
// const userReducer = function(state=[], action) {
//   // if (state === undefined) {
//   //   state = [];
//   // }
//   if (action.type === 'ADD_USER') {
//     // // mutate state
//     // state.push(action.user)
//     // don't mutate state
//     // const newState = state.concat([action.user]);
//     // return newState;
//     return [...state, action.user];
//   }
//   return state;
// }


// const store2 = createStore(userReducer);
//
// store2.subscribe(() => console.log(store2.getState()))

// https://github.com/bradwestfall/CSS-Tricks-React-Series/blob/master/guide-3-redux/docs/action-strategies.md
// action type
// const ADD_USER = 'ADD_USER';
//
// // action creator
// const addUser = name => ({type: ADD_USER, user: {name}});
// // const addUser = function(name) {
// //   return {type: 'ADD_USER', user: {name}}
// // }
// // bound action creator to dispatch
// const boundAddUser = (store, name) => store.dispatch(addUser(name));
//
//
// store2.dispatch({
//   type: 'ADD_USER',
//   user: {name: 'Dan'}
// })
//
// store2.dispatch({
//   type: 'ADD_USER',
//   user: {name: 'Lolo'}
// })
//
// store2.dispatch(addUser('Trolo'));
//
// boundAddUser(store2, 'Hromotlk');
