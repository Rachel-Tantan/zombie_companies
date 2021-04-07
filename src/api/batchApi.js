import request from "@/utils/request"

export default {
    fileUpload() {
        return request({
            url: '/single/',
            method: 'post'
        })
    },
    tableData(){
        return request({
            url:'/calculate/',
            method:'post'
        })
    },
    pageData(page){
        return request({
            url:`/page/${page}`,
            method:"post"
        })
    },
    search(id){
        return request({
            url:`/search/${id}`,
            method:"post"
        })
    },
    download(){
        return request({
            url:'/download/',
            method:'get'
        })
    }

}