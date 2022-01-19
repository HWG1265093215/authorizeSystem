import { createApp } from 'vue'
import App from './main.vue'
// 路由
import routerConfig from './routerConfig/router.js'
//elment-plus 


//element-ui plus 配置
import elementconfig from './installPlugin/Element-PlusConfig.js'
//Vuex配置
import vState from './store/baseState.js'

if(process.env.NODE_ENV==="development")
{
    require('./mock/mockData.js')
    //require('./mock/mockDataTwo.js')
} 

const app = createApp(App)
elementconfig(app);
app.use(routerConfig);
app.use(vState);
app.mount('#app')
