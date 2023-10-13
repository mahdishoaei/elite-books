<template>
    <div 
        class="order-detail-container d-flex flex-column"
        style="width: 1000%;"
    >

        <div class="order-detail d-flex align-center">
            <span class="app-font-size-16 app-font-weight-600">
               Total Order Price :
            </span>
            <span class="app-font-size-16 app-font-weight-600 px-5 py-1 app-bg-white rounded mx-3">
                $123.224.99
            </span>
        </div>

        <div class="order-detail d-flex align-center mt-4 mb-4">
            <span class="app-font-size-16 app-font-weight-600">
               Total Products Order :
            </span>
            <span class="app-font-size-16 app-font-weight-600 px-5 py-1 app-bg-white rounded mx-3">
                12
            </span>
        </div>

        <div class="order-detail d-flex align-center justify-end px-5">
            <CoreBtn 
                    class="mx-2"
                    name="Payment"
                    icon="cash"
                    background="blue" 
                    borderRadius="5px" 
                    width="120px"
                    height="30px"
                    @click="navigateTo('/auth/login')"
                /> 
            <div>
                <CoreBtn 
                    class="mx-2"
                    name="Clear Cart" 
                    icon="trash"
                    background="danger" 
                    borderRadius="5px" 
                    width="120px"
                    height="30px"
                    @click="navigateTo('/auth/login')"
                />                                      
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { applicationTheme } from '@/stores/applicationTheme'

const ThemeDS = applicationTheme()

const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})
</script>

<style scoped>
.order-detail-container{
    border-radius: 15px 15px 15px 15px;
    height: 230px;
    margin: 0 20px;
    background: rgb(132,126,245);
    color: #fff;
    background: linear-gradient(76deg, rgba(132,126,245,1) 0%, rgba(237,153,88,1) 48%, rgba(241,189,189,1) 100%);
}

@media (max-width: 850px) {
    .order-detail-container{
        border-radius: 15px 15px 0px 0px;
        height: 140px;
        margin: 0 0 ;
    }
}
</style>