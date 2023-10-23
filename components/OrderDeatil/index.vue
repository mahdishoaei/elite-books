<template>
    <div 
        class="order-detail-container d-flex flex-column"
        style="width: 1000%;"
    >
        <div>
            <span class="app-font-size-16 app-font-weight-900">
                Your order cart in
            </span>
            <span class="app-font-size-18 app-font-weight-900 app-color-primary">
                Elite Books
            </span>
        </div>
        <div class="d-flex mt-3">
            <div>
                <BootstrapIconHouseDoorFill />
            </div>
            <span 
                class="app-font-size-16 app-font-weight-600 px-1"
                @click="navigateTo('/home')"
            >
                Home /
            </span>
            <div class="mx-1">
                <BootstrapIconSearch />
            </div>
            <span 
                class="app-font-size-16 app-font-weight-600"
                @click="navigateTo('/search')"
            >
                Search
            </span>
        </div>
        <div class="d-flex mt-2">
           <span class="app-font-size-16 app-font-weight-600 px-2 pt-1">
              Total Order Price
           </span>
           <div class="rounded app-bg-white py-1 px-2 app-font-size-16 app-font-weight-900">
              $ 16000
           </div>
        </div>
        <div class="d-flex mt-2">
            <span class="app-font-size-16 app-font-weight-600 px-2 pt-1">
               Total Product In Order
            </span>
            <div class="rounded app-bg-white py-1 px-2 app-font-size-16 app-font-weight-900">
               12
            </div>
         </div>
         <div class="d-flex mt-2">
            <CoreBtn 
            class="mx-2"
            name="Payment" 
            background="primary" 
            borderRadius="5px" 
            width="120px"
            height="32px"
            icon="cash"
          /> 
          <CoreBtn 
            name="Clear Cart" 
            background="blue"  
            borderRadius="5px" 
            width="120px"
            height="32px"
            icon="trash"
          />
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
}
</style>