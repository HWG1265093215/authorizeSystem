<template>
    <div>
        <template v-for="item of listMeun">
            <template v-if="item.children==null||item.children.length==0">
                 <el-menu-item :key="item.index" :index="item.path" @click='clickMeun(item)'>
                    <template #title>
                         <component class="icon-size" :is="item.icon"></component>
                         <span>{{item.lable}}</span>
                    </template>
                 </el-menu-item>
            </template>
            <template v-else>
                <el-sub-menu :key="item.index" :index="item.path">
                    <template #title>
                      <component class="icon-size" :is="item.icon"></component>
                      <span>{{item.lable}}</span>
                    </template>
                    <meun-details :listMeun="item.children"/>
                </el-sub-menu>
            </template>
        </template>
    </div>
</template>
<script>
import { defineComponent, ref,computed } from 'vue'
import {useStore} from 'vuex'
export default {
    name:"MeunDetails",
    props:{
      listMeun:{
        default:null,
        type:Object
      }
    },
    components:{
       
    },
    setup:function()
    {
       let store=useStore();
       function clickMeun(meunitem)
       {
         let item={
           path:meunitem.path,
           lable:meunitem.lable
         };
          store.dispatch('tabadd',item);
       }

       return {
         clickMeun
       }
    }
}
</script>

<style   scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 40px;
}

h3{
  line-height: 60px;
  margin: 0px;
}
</style>