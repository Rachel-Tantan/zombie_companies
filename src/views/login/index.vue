<template>
  <div>
    登录页
    <button @click="submitForm">验证</button>
  </div>
</template>

<script>
import {login,getUserInfo} from '@/api/login'

export default {
  data () {
    return {
    }
  },

  components: {},

  methods: {
      submitForm(){
          login().then( response => {
              const resp = response.data
              console.log(resp.flag,resp.message)
          })
      }
  }
}
</script>

<style scoped>
</style>