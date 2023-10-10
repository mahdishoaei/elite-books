import { defineStore } from 'pinia'

export const applicationUserData = defineStore('user' , {

    state: () => ({
        authenticated: false,
        toekn: '',
        profile: {
            userId: '',
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            gender: '',
            userTypeId: ''
        }
    }) ,  

    actions : {}

})