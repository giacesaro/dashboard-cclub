import { combineReducers } from "redux";
import { blockchainReducer } from "./Blockchain/BlockchainReducer";
import { newsReducer } from "./News/NewsReducer";
import { RefMovReducer } from "./ReferralMovement/RefMovReducer";
import { userReducer } from "./Users/UserReducer";


const rootReducer = combineReducers({
    blockchain: blockchainReducer,
    news: newsReducer,
    user: userReducer,
    refMovement: RefMovReducer
});

export default rootReducer;