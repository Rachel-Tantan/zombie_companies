<template>
  <div class="navbar">
     <div class="header">
         <span>logo</span>
     </div>
     <el-menu
      :router= "true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#ffffff"
      text-color="#2b295b"
      active-text-color="#ffffff">
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- <el-menu-item index="/single">
        <i class="el-icon-menu"></i>
        <span slot="title">单个查询</span>
      </el-menu-item> -->
      <el-menu-item index="/batch">
        <i class="el-icon-search"></i>
        <span slot="title">查询</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
       
    };
  },

  components: {},

  methods: {
      
  }
};
</script>

<style scoped>
.navbar {
  position: absolute;
  width: 150px;
  top: 0px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto;
  background-color: #ffffff;
  color: #ffffff;
  
}
.header{
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #448cff;
    /* border: solid 1px; */
    background-color: #ebf1ff;
    margin:8px;
    border-radius: 10px;
}
.el-menu{
    border-right: none
}
.el-menu-item.is-active {
   background-color: #009cfd !important;
   border-radius: 8px;
   margin: 0px 5px
}
.el-menu-item{
  height: 40px;
  line-height: 40px;
}
.el-menu-item:hover,.el-menu-item:focus{
  background: #5d8aa6 !important;
  color:#448cff;
   border-radius: 8px;
   margin: 0px 5px

}
</style>