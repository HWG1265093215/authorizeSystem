<template>
    <div>
          <!-- closable='false'  -->
        <el-tag
         v-for="item in tempList"
         :key="item.path"
         :closable="item.path!='Home'"
         size="large"
         class="mx-1 mxtag" 
         
         @close="removeTag(item)"
         :effect="item.path!=currentMeun.path?'plain':'dark'"
           
        >
         {{ item.lable }}
          
        </el-tag>
<!-- :type="item.path!=currentMeun.path?'info':'success'" -->

    </div>
</template>

<script>
import {useStore,mapGetters} from 'vuex'
import {computed,ref,reactive} from 'vue'
import {useRoute} from 'vue-router'
export default {
    setup:function()
    {
        const store=useStore();
        const currentMeun=computed(()=>{
           return store.getters.getCurrentMeun;
        });
        
        const tempList=computed(()=>{
           return   store.getters.geTabList;
        });

        let router=useRoute();

        function removeTag(tag)
        {
            //console.log(this.currentMeun.path);
            //console.log(.path);
            store.dispatch('tagremove',tag);
            // this.currentMeun={
            //     path:'Home',
            //     lable:'首页'
            // };
            //console.log(this.currentMeun.path);
        }
        let colsableTag=ref(false);
        return {
            tempList,colsableTag,removeTag,currentMeun
        }
    }
}
</script>

<style scoped>
    .mxtag{
        margin-right:10px;
    }
    div{
        line-height: 50px;
    }
    
</style>