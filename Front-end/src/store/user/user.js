import {defineStore} from 'pinia'

export const userStore = defineStore('user', {
    state: () => {
        return {
            userInfo: JSON.parse(localStorage.getItem('userinfo')) || [],
        }
    },
    getters: {},
    actions: {
        setUserInfo(userInfo){
            localStorage.setItem('userinfo', JSON.stringify(userInfo));
            this.userInfo = JSON.parse(localStorage.getItem('userinfo')) || userInfo
        },
        loginOut(){
            localStorage.removeItem('userinfo')
            this.userInfo = [];
        },
        updateUserInfo(userinfo){
            localStorage.removeItem('userinfo')
            localStorage.setItem('userinfo', JSON.stringify(userinfo));
        }
    },
})
