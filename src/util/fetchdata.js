/**
 * Created by admin on 2016/10/10.
 */
import axios from 'axios'

//封装好的get和post接口，调用方法情况action文件
export let instance = axios.create({
    // baseURL: API_URL, //设置默认api路径
    timeout: 10000, //设置超时时间
    // headers: {'X-Custom-Header': 'foobar'}
});

export const getData = (url, param) => {
    return (
        instance.get(`${url}`)
    )
}

export const postData = (url, param) => {
    console.log(url)
    console.log(param)
    return (
        instance.post(`${url}`, param)
    )
}