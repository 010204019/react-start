import {
    authGetRole,
    authSetRole,
    authGetLoginToken
} from './authorized'
import * as routerUrl from '../routes/routeconst';
import {
    hashHistory
} from 'react-router';
import * as loginAction from '../actions/Login/login';
import store from '../store/rootstore';
/**
 * 路由工具类
 * @param {*} param0 
 */
export function routefilterChunk({
    isAuth = true,
    authRole = [],
    redirecTo = "",
    callback = null
} = {}) {
    let text = "text";
    //开启权限验证
    if (isAuth == true) {
        //判断是否登录
        if (authGetLoginToken() == "") {
            //没有登录
            //跳转到登录界面
            console.log("xxxx")
            hashHistory.push(routerUrl.URL_LOGIN)
        } else {
            //判断是否开启角色判断登录
            //待实现
        }
    }
    let authorized_role = authGetRole();

    if (callback != null) {
        callback()
    }
}


export function routerPageLoadHandWith(nextState, cb) {
    store.dispatch(loginAction.actf_pageChangeLoading(true))
    require.ensure([], (require) => {
        store.dispatch(loginAction.actf_pageChangeLoading(false))
        cb(null, require('../container/HomePage/hompage'))
    }, 'HomePage')
}


export const routeeWithLoader = (fn) => {
    return (nextState, cb) => {
        store.dispatch(loginAction.actf_pageChangeLoading(true))
        fn(nextState, (err, cmp) => {
            store.dispatch(loginAction.actf_pageChangeLoading(false))
            cb(err, cmp)
        })
    }
}