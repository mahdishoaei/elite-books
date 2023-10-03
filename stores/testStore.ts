import { defineStore } from 'pinia'

export const testStore = defineStore('counter' , {

    state: () => ({counter : 0}) ,  

    actions : {
       plus() {
        this.counter++
       }
    }

})