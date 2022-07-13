import { combineReducers } from "redux";
import { applicationReducer } from "./Application";
import { blockchainReducer } from "./Blockchain/BlockchainReducer";
import { newsReducer } from "./News/NewsReducer";
import { sidebarReducer } from "./Sidebar/SidebarReducer";
import { userReducer } from "./Users/UserReducer";


const rootReducer = combineReducers({
    blockchain: blockchainReducer,
    news: newsReducer,
    user: userReducer,
    sidebar: sidebarReducer,
    application: applicationReducer
});

export default rootReducer;