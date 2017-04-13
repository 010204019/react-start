import { combineReducers } from 'redux'
import * as loginAction from '../actions/Login/login'

//处理登录action
const initialState = {
    loadQueue: []
};

function redu_pageChangeLoad(previousState=initialState, action) {
    switch (action.type) {
        case loginAction.ACT_PAGE_CHANGE_LOADING:
            //获取state中的loadQueue
            let {
                loadQueue
            } = previousState;

            if (action.payload.flg) {
                loadQueue.push(true)
            } else {
                loadQueue.pop()
            }
            return Object.assign({}, previousState, {
                loadQueue: loadQueue
            })
        default:
            return previousState;
    }
}


const reducer = combineReducers({
  pageLoad: redu_pageChangeLoad
})

export default reducer