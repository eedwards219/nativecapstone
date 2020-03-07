import { createStore, combineReducers, applyMiddleware } from "redux";
import ridesReducer from "./rides/reducer";
import driversReducer from "./drivers/reducer";
import passengersReducer from "./passengers/reducer";
import authReducer from "./auth/reducer";

import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  drivers: driversReducer,
  passengers: passengersReducer,
  rides: ridesReducer,
  auth: authReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
