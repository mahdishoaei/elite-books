import { defineStore } from 'pinia'
import { successToast } from '@/utils/toasMessage'

export const applicationTheme = defineStore('theme' , {

    state: () => ({theme : 'light'}) ,  

    actions : {
       changeThemeStatus(){
         switch(this.theme){
            case 'dark':
            this.theme = 'light';
            break;
            case 'light':
            this.theme = 'dark';
            break;
         }
       }
    }

})