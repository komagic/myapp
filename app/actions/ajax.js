/**
 * 用axios 封装 所有ajax
 */

 import axios from 'axios';

 export function getAjax(url,cb) {
     axios.get(url).then(function (response) {
         cb(response);
     })
     .catch(function (error) {
         console.log(error);
         
     })
 }

 //封装put 方式获取数据,data是需要传输的值,cb回调函数调用时可以取得response的值

 export function putAjax(url,data,cb) {
     axios.put(url,data).then(function (response) {
         cb(response);
     })
     .catch(function (error) {
         console.log(error);
         
     })
 }

 //封装的post方式获取数据，data是需要传输的值，cb回调函数调用时可以取得response的值
export function postAjax(url,data,cb) {
    axios.post(url,data)
    .then(function (response) {
        cb(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

//封装的delete方式获取数据，cb回调函数调用时可以取得response的值
export function deleteAjax(url,cb) {
    axios.delete(url)
    .then(function (response) {
        cb(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}