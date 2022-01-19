import AxiosHttpRequest  from "./require.js";

export const getStr=()=>{
    return AxiosHttpRequest.request({
        url:'/weatherforecast/getStrs',
        method:"get"
    });
};