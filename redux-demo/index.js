// Store
// es6 import
const redux = require("redux");
const createStore = redux.createStore;

// Action is the plain object here inside return
// Action Creator a function that returns an action

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// Reducer
// (prevState, action) => return a new state

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

// split a state and reducer for multiple reducers
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         // object might contain more than one property
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };

//     case BUY_ICECREAM:
//       return {
//         // object might contain more than one property
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };

//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        // object might contain more than one property
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        // object might contain more than one property
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

// Holds application state
const store = createStore(reducer);
// Allows access to state via getState()
console.log("Initial state", store.getState());
// Registers listneres via subscribe(listner)
// Handles unregistering of listners
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
// Allows state to be updated via dispatch(action)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
