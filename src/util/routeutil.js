import {authGetRole,authSetRole,authGetLoginToken} from './authorized'
import {hashHistory} from 'react-router';
/**
 * 路由工具类
 * @param {*} param0 
 */
export function routefilterChunk({ isAuth = true, authRole=[], redirecTo = "", callback = null } = {}) {
    console.log("-------routefilterChunk--------");
    let text = "text";
    //开启权限验证
    if(isAuth==true){
        //判断是否登录
        if(authGetLoginToken()==""){
            //没有登录
            //跳转到登录节目
            hashHistory.push("/login")
        }else{
            //判断是否开启角色判断登录
            //待实现
        }
    }
    let authorized_role = authGetRole();
    authSetRole("查人")
    console.log("权限-角色【"+authorized_role+"】")
    console.log("-------routefilterChunk--------");
    console.log("-------routefilterCallBack--------");
    if (callback != null) {
        callback()
    }
    console.log("-------routefilterCallBack--------");
}

// export function lazyLoadCompent(nextState, cb, path, name) {
//     require.ensure([], (require) => {
//         cb(null, require(path))
//     }, name)
// }