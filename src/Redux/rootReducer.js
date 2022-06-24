import { combineReducers } from "redux";
import { blockchainReducer } from "./Blockchain/BlockchainReducer";
import { newsReducer } from "./News/NewsReducer";

const rootReducer = combineReducers({
    blockchain: blockchainReducer,
    news: newsReducer
});

export default rootReducer;