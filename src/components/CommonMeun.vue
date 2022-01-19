<template>
     <el-menu class="el-menu-vertical-demo">
          <meun-details :listMeun="meunData"/>
     </el-menu>
</template>
<script>
import { ref,computed } from 'vue'
import meunDetails from './MeunDetails.vue'
import {mapGetters,useStore } from 'vuex'
export default {
  name:"CommonMeun",
  components: {
    meunDetails
  },
  setup() {
    const store=useStore();
     

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }

    const selectItem=(key,path)=>{
      console.log(key);
       console.log(path);
    };
    const meunData=[
      {
        path:'home',
        lable:'首页',
        icon:'HomeFilled',
        index:'1'
      },
      {
        path:'mail',
        lable:'商品管理',
        icon:'video-play',
        index:'2'
      },
      {
        path:'user',
        lable:'用户管理',
        icon:'user',
        index:'3'
      },
      {
        path:'other',
        lable:'其他',
        icon:'location',
        index:'4',
        children:[
          {
            path:'other1',
            lable:'页面1',
            icon:'setting',
            index:'5'
            ,
                 children:[
                  {
                    path:'other3',
                    lable:'页面3',
                    icon:'setting',
                    index:'7'
                  },
                  {
                    path:'other4',
                    lable:'页面4',
                    icon:'setting',
                    index:'8'
                  }
                ]
          },
          {
            path:'other2',
            lable:'页面2',
            icon:'setting',
            index:'6'
          }
        ]
      }
    ];

    return {
       
      handleOpen,
      handleClose,
      meunData,
      selectItem
    }
  } 
}
</script>

<style>
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 60px;
} */

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

h3{
  line-height: 60px;
  margin: 0px;
}

</style>


