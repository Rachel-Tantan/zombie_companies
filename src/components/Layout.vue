<template>
  <div class="layout">
    <!-- <app-header/>
    <app-main/>-->
    <el-container style="height:100%;" direction='vertical'>
      <el-header style="height:50px"><app-header/></el-header>
      <el-main><app-main/></el-main>
    </el-container>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavbar";
import AppMain from "../components/AppMain";
export default {
  data() {
    return {};
  },

  components: {
    AppHeader,
    AppNavbar,
    AppMain
  },

  methods: {}
};
</script>

<style >
body {
  margin: 0px;
}
.layout,.el-container,#app,html,body
{
  height: 100%
}
.el-header{
  line-height: 49px;
  width: 100%;
  padding:0px
}
.el-main{
  width: 100%;
  /* background-image: url("../assets/背景/img_0035.jpg"); */
  background-color: #ebeaec;
  padding-left:50px;
  padding-right: 50px;
}
</style>