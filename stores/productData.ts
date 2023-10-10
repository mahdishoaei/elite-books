import { defineStore } from 'pinia'

export const productDS = defineStore('books' , {

    state: () => ({
        books:[]
    }),
    
})