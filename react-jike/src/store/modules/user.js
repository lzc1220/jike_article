import {createSlice} from '@reduxjs/toolkit'
import {request, setToken as _setToken, getToken, removeToken} from '@/utils'
import { loginAPI, getProfileAPI } from '@/apis/user'

const userStore = createSlice({
    name:"name",
    //初始状态数据
    initialState:{
        token: getToken() || '',
        userInfo: {}
    },
    //修改数据的同步方法
    reducers:{
        setToken(state, action) {
            state.token = action.payload
            //存到本地来实现token持久化
            _setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state) {
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
},
)

//解构出创建action对象的函数 {actionCreater}
const {setToken, setUserInfo, clearUserInfo} = userStore.actions
//获取reducer函数
const userReducer = userStore.reducer
//导出创建action对象的函数和reducer函数

//异步

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        //1.发送异步请求
        const res = await loginAPI(loginForm)
        //2.提交同步action进行token的存入
        dispatch(setToken(res.data.token))
    }
}
const fetchUserInfo = () => {
    return async (dispatch) => {
        //1.发送异步请求
        const res = await getProfileAPI()
        //2.提交同步action进行token的存入
        dispatch(setUserInfo(res.data))
    }
}
export {setToken, fetchLogin, fetchUserInfo, clearUserInfo}//按需导出
export default userReducer//默认导出