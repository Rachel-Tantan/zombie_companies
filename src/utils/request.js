import axios from 'axios'
import {Loading} from 'element-ui'
// Loading.service({target:'.batch'})

const loading = {
    loadingInstance:null,
    open:function(){
        console.log('加载中',this.loadingInstance)
        if(this.loadingInstance == null){
            console.log('加载中')
            this.loadingInstance = Loading.service({
                text:'数据正在处理中，请稍后...',
                target:'.main',
                background:'rgba(255,255,255,0.8)'
            })
        }
    },
    close:function(){
        if(this.loadingInstance !== null){
            this.loadingInstance.close()
            console.log('结束加载')
        }
        this.loadingInstance = null
    }
}

const request = axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout: 500000
})

request.interceptors.request.use(config => {
    loading.open()
    return config
},error=>{
    loading.close()
    return Promise.reject(error);
})

request.interceptors.response.use(response => {
    loading.close()
    return response
},error => {
    loading.close()
    return Promise.reject(error);
})

export default request