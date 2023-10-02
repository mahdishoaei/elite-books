import { defineStore } from 'pinia'

export const testStore = defineStore('test' , {

    state: () => ({counter : 0}) ,  

    actions : {
       plus() {
        this.counter++
       }
    }

})