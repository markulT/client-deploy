import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
// import rootReducer from "./reducers";
import authReducer from "./reducers/authReducer";
import payReducer from "./reducers/payReducer";
import signupReducer from "./reducers/signReducer";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

const reducers = combineReducers({
    authReducer: authReducer,
    payReducer:payReducer,
    signupReducer:signupReducer
})

// creating store
export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);