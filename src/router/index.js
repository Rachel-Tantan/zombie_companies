import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login"
import Layout from "../components/Layout.vue"

// import Single from "../views/single"
import Batch from "../views/batch"
import Home from "../views/home"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path:"/",
    name:"layout",
    component: Layout,
    redirect:'/home',
    children:[
      {
        path:'/home',
        name:'home',
        component: Home,
        meta:{title:'首页'}
      },
      // {
      //   path:'/single',
      //   name:'single',
      //   component: Single,
      //   meta:{title:'单个查询'}

      // },
      {
        path:'/batch',
        name:'batch',
        component: Batch,
        meta:{title:'查询'}

      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
