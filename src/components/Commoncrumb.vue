<template>
    <div>  
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
import {useStore} from 'vuex'
export default {
    name:"Breadcrumb",
    setup:function()
    {
        let store=useStore();

    }
}
</script>
<style scoped>

</style>