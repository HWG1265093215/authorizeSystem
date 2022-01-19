<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <CommonMeun />
      </el-aside>
      <el-container>
        <el-header>
          <crumb/>
          <el-button type="success"> 1</el-button>
        </el-header>
        <el-main>
          <tab-list/>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import basecss from "./styles/base.css";
import CommonMeun from "./components/CommonMeun.vue";
import { getStr } from "./network/dataRequest.js";
import { ref, onMounted, reactive } from "vue";
import {useStore} from 'vuex'

import desk from "./components/DesktopHome.vue";
import tabList from './components/tagShowList.vue'
import crumb from './components/Commoncrumb.vue'
export default {
  name: "app",
  components: {
    CommonMeun,
    desk,
    tabList,
    crumb
    //,desktoPage
  },
  setup: function () {
    const title = ref("这是我给你的");
    const store=useStore();
    onMounted(() => {
      // getStr().then((res) => {
      //   console.log(res);
      //   console.log("1");
      // });
    });

    function changeState()
    {
        let colapse=!store.state.iscollapse;
        store.dispatch('changecollapse',colapse);
    }

    let xData = reactive({
      title: {
         text: "ECharts 入门示例",
       },
       xAxis: [{
         data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
         type:'category'
       }],
       yAxis : [
        {
            type : 'value'
        }
       ],
       series: [
         {
           name: "销量",
           type: "bar",
           data: [5, 20, 36, 10, 105, 54]
            
         },
       ]
 
      
    });

    return {
      title,
      xData,
      changeState
    };
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-container {
  height: 100vh;
  margin: 0px;
  padding: 0px;
}

.el-aside {
  background-color: #ffffff;
  color: var(--el-text-color-primary);
  text-align: center;
}
/* line-height: 200px; */

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  padding: 0px;
}
</style>
