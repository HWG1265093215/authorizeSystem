import axios from 'axios'
import config from './config.js'

//根据开发配置两个不同环境切换Url 

const baseUrl=process.env.NODE_ENV==='development'?
              config.baseUrl.dev:config.baseUrl.pro;

class AxiosHttpRequest{
    constructor(url)
    {
        
        this.baseURL=url;
    }

    //设置默认配置
    setDefaultReqConfig()
    {
        const config={
            baseURL:this.baseURL,
            timeout:10000,
            changeOrigin:true,
            headers:{'Access-Control-Allow-Origin':'*',"Access-Control-Allow-Methods":"POST, GET, PUT, OPTIONS, DELETE"}
        };
        
        return config;
    }
    //拦截器
    intereptors(instance)
    {
        //请求拦截器
        instance.interceptors.request.use(config=>{
            console.log('马上要发送请求了，你可以做点什么......',config);
            //config.url="http://localhost:8093/weatherforecast/getStrs";
            //验证token 以及数据转换处理
            return config;
        },error=>{
            //请求超时时可以设置再次请求 
            //需要重定向错误页面
            console.error('怎么搞的，有没有测试过，怎么出错了....');
            return Promise.reject(error);
        });

        //响应拦截器
        instance.interceptors.response.use(response=>{
            return response;
        },error=>{
            let { response } = error;
            if (response) {
                //服务器有返回内容
                var errormsg = '';
                switch (response.status) {
                    case 400:
                        errormsg = '错误请求'
                        break;
                    case 401:
                        errormsg = '未登录,请重新登录'
                        break;
                    case 403:
                        errormsg = '决绝访问'
                        break;
                    case 404:
                        errormsg = '请求错误，未找到该资源'
                        break;
                    case 405:
                        errormsg = '请求方法未允许'
                        break;
                    case 408:
                        errormsg = '请求超时'
                        break;
                    case 500:
                        errormsg = '服务器出错'
                        break;
                    case 501:
                        errormsg = '网络未实现'
                        break;
                    case 502:
                        errormsg = '网络错误'
                        break;
                    case 503:
                        errormsg = '服务不可用'
                        break;
                    case 504:
                        errormsg = '网络超时'
                        break;
                    case 505:
                        errormsg = 'http版本不支持该请求'
                        break;
                    default:
                        errormsg = '连接错误'
                }
                console.error(errormsg);
                return Promise.reject(errormsg);
                
               
            } else {
                //服务器连结果都没有返回  有可能是断网或者服务器奔溃
                if (!window.navigator.online) {
                    //断网处理
                    console.log('网络中断');
                    return;
                } else {
                    //服务器奔了
                    console.log('服务器奔了');
                    return Promise.reject(error);
                }
            }
        });
    }

    request(options)
    {
        const instance=axios.create({
            timeout:10000,
            changeOrigin:true,
            baseURL:'http://localhost:8093'
        });
        //配置合并
        options={...options};
       
        this.intereptors(instance);
        
        return instance(options);
    }
}


export default  new AxiosHttpRequest(baseUrl) 