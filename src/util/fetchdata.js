import axios from 'axios'
import {
    hashHistory
} from 'react-router';
import * as auth from '../util/authorized'

// 设置相关的参数
var tempUrlExpand = ";jsessionid=49ADF9D65216379236E2FB18F7F8F41A"; //强制设置cookie，部署时【取消】;jsessionid=48FF0034845E3F6F2DE836DA28CF5A0F
var tempDomian = "http://192.168.0.210/app/"; //强制设置请求的域名，部署是设置为【项目的名称】

//封装好的get和post接口，调用方法情况action文件
export let instance = axios.create({
    // baseURL: API_URL, //设置默认api路径
    timeout: 10000, //设置超时时间
    // headers: {'client_type': 'app'}
});
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = tempDomian;
// xios.defaults.withCredentials = true; //如果后端服务器启用CORS即可启用传cookie
/**
 * 请求拦截器
 */
instance.interceptors.request.use(function (config) {
    // 如果登录过了
    if (config.url.indexOf(".action") >= 0) {
        config.url = config.url + tempUrlExpand;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

/**
 * 响应拦截器
 */
instance.interceptors.response.use(function (response) {
    if (response.request.responseURL.indexOf('login.jsp') >= 0) {
        //会话失效了，跳转到登录页面
        hashHistory.push("/login");
        auth.authSetLoginToken("");
        auth.authSetLoginUser({});
        auth.authSetRole("");
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});

export const getData = (url, param) => {
    return (
        instance.get(`${url}`, {
            params: param
        })
    )
}
export const postData = (url, param) => {
    return (
        instance.post(`${url}`, paramJsonObject(param))
    )
}

var paramJsonObject = function (obj) {
    var query = '',
        name, value, fullSubName, subName, subValue, innerObj, i;

    for (name in obj) {
        value = obj[name];

        if (value instanceof Array) {
            for (i = 0; i < value.length; ++i) {
                subValue = value[i];
                fullSubName = name + '[' + i + ']';
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += paramJsonObject(innerObj) + '&';
            }
        } else if (value instanceof Object) {
            for (subName in value) {
                subValue = value[subName];
                fullSubName = name + '[' + subName + ']';
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += paramJsonObject(innerObj) + '&';
            }
        } else if (value !== undefined && value !== null)
            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }

    return query.length ? query.substr(0, query.length - 1) : query;
}