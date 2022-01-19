<template>
  <div>
   <button @click="getprice">测试</button>
   <input type="number" v-model="price"/>
   <router-link to="/Home?lang=chinaese">首页chinaese</router-link>
    <router-link to="/Home?lang=English">首页English</router-link>
   <router-link to="/details">详情页</router-link>
   <router-link to="/person">个人</router-link>
   <router-link to="/person01">个人</router-link>

  <router-view v-slot="{ Component }">
      <keep-alive include="Home">
        <component :is="Component"/>
      </keep-alive>
  </router-view>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive, watch, getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
/**
 * TODO:
 */
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  /**
   * todo:323234432
   * TODO:DSFSDFSDFSAD
   */
  setup: function () {
    const price = ref(200)
    const person = reactive({
      name: 'jack',
      age: 12
    })
    const { proxy } = getCurrentInstance()
    const { t } = useI18n()
    function getprice () {
      console.log('1')
    }
    return { price, getprice, person }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
