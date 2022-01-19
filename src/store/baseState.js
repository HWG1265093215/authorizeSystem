import {createStore} from 'vuex'

const store=createStore({
    state:{
        iscollapse:false,
        currentmeun:{
            path:'Home',
            lable:'首页'
        },
        tabList:[{
            path:'Home',
            lable:'首页',
        }]
    },
    actions:{
        changecollapse:function(context,iscolapse)
        {
            context.commit('changecollapse',iscolapse);
        },
        tabadd:function(context,itemMeun)
        {
            context.commit('tabaddMeun',itemMeun);
        },
        tagremove:function(context,itemMeun){
            context.commit('tagremoveMeun',itemMeun);
        }
    },
    mutations:{
        changecollapse:function(state,iscolapse){
            state.iscollapse=iscolapse;
        },
        tabaddMeun:function(state,meunItem){
            if(state.tabList.filter(n=>n.lable==meunItem.lable).length==0)
            {
                state.currentmeun=meunItem;
                state.tabList.push(meunItem);
            }
            
        },
        tagremoveMeun:function(state,meunItem)
        {
            debugger;
            if(meunItem.path!="Home")
            {
                //console.log(state.tabList.indexOf(meunItem),meunItem);
                state.tabList.splice(state.tabList.indexOf(meunItem),1);
                if(meunItem==state.currentmeun)
                {
                    state.currentmeun=state.tabList.filter(n=>n.path=="Home")[0];
                }
            }
            
        }
    },

    getters:{
        getcolapse:function(state){
            return state.iscollapse;
        },
        geTabList:function(state)
        {
            return state.tabList;
        },
        getCurrentMeun:function(state)
        {
            return state.currentmeun;
        }
    },
    modules:{

    }
});

export default store