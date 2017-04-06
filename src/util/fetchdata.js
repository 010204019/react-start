/**
 * Created by admin on 2016/10/10.
 */
import axios from 'axios'

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//封装好的get和post接口，调用方法情况action文件
export let instance = axios.create({
    // baseURL: API_URL, //设置默认api路径
    timeout: 10000, //设置超时时间
    // headers: {'Content-Type': 'pplication/x-www-form-urlencoded;charset=UTF-8'}
});
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL= 'http://192.168.0.210/app/';

export const getData = (url, param) => {
    return (
        instance.get(`${url}`, param)
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
export const postData = (url, param) => {
    console.log(url)
    console.log(JSON.stringify(param))
    return (
        instance.post(`${url}`, paramJsonObject(param))
    )
}