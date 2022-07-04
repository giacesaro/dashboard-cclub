import { combineReducers } from "redux";
import { applicationReducer } from "./Application";
import { blockchainReducer } from "./Blockchain/BlockchainReducer";
import { newsReducer } from "./News/NewsReducer";
import { RefMovReducer } from "./ReferralMovement/RefMovReducer";
import { sidebarReducer } from "./Sidebar/SidebarReducer";
import { userReducer } from "./Users/UserReducer";


const rootReducer = combineReducers({
    blockchain: blockchainReducer,
    news: newsReducer,
    user: userReducer,
    refMovement: RefMovReducer,
    sidebar: sidebarReducer,
    application: applicationReducer
});

export default rootReducer;