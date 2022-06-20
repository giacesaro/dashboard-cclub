import { combineReducers } from "redux";
import { blockchainReducer } from "./Blockchain/BlockchainReducer";

const rootReducer = combineReducers({
    blockchain: blockchainReducer,
});

export default rootReducer;