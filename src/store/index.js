// import { legacy_createStore, combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import authReducer from './auth';



const store = configureStore({
    // reducer: counterSlice.reducer   sirve para un solo reducer
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     };

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     };

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     };

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }

// const store = legacy_createStore(counterReducer);

// export default store;
