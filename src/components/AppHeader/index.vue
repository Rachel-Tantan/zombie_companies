<template>
  <div class="header">
    <!-- <div class="l-content">
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
    </div>-->
    <div class="l-content">
      <img class="logo" src="../../assets/文字logo.png" alt />
      <el-menu
        :router="true"
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#ffffff"
        text-color="#757487"
        active-text-color="#3d229b"
      >
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
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <div class="block">
            <el-avatar size="small" :src="circleUrl"></el-avatar>
          </div>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },

  components: {},

  methods: {}
};
</script>

<style scoped>
.header {
  display: flex;
  background-color: #ffffff;
  left: 0px;
  right: 0px;
  justify-content: space-between;
}
.l-content {
  margin: 0px 35px;
  display: flex;
  align-items: center;
}
.logo {
  height:35px;
  display: inline-block;
  align-items: center;
  margin-left: 20px;
}
.el-dropdown {
  margin: 0px 70px;
}
/* .el-input {
  border-radius: 30%;
} */
/* .el-input >>> .el-input__inner {
  border-radius: 10px;
  height: 50px;
  width: 300px;
} */
.el-menu--horizontal {
  margin-left: 25px;
}
.el-menu--horizontal > .el-menu-item {
  height: 40px;
  line-height: 40px;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
  display: inline-block;
}
.block{
  display: inline;
}
.el-avatar{
  vertical-align: middle;
  margin: 0 auto
}
</style>