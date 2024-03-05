import userReducer from "./modules/user"
import { applyMiddleware, configureStore } from "@reduxjs/toolkit"
// import { composeWithDevTools } from "redux-devtools-extension"

//创建根store组合子模块
// const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
const store = configureStore({
    reducer:{
        name: userReducer
    }
})

export default store