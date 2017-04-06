import {authGetRole,authSetRole,authGetLoginToken} from './authorized'
import * as routerUrl from '../routes/routeconst';
import {hashHistory} from 'react-router';
/**
 * 路由工具类
 * @param {*} param0 
 */
export function routefilterChunk({ isAuth = true, authRole=[], redirecTo = "", callback = null } = {}) {
    let text = "text";
    //开启权限验证
    if(isAuth==true){
        //判断是否登录
        if(authGetLoginToken()==""){
            //没有登录
            //跳转到登录界面
            hashHistory.push(routerUrl.URL_LOGIN)
        }else{
            //判断是否开启角色判断登录
            //待实现
        }
    }
    let authorized_role = authGetRole();
   
    if (callback != null) {
        callback()
    }

}
