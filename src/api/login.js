import request from "@/utils/request"

export function login(){
    return request({
        url:'/user/login',
        method:'post'
    })
}

export function getUserInfo(token){
    return request({
        url:`/user/info/${token}`,
        method:'get'
    })
}