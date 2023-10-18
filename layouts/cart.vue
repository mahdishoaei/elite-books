<script setup lang="ts">
import { applicationTheme } from '@/stores/applicationTheme'

const ThemeDS = applicationTheme()

const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})
</script>

<template>
    <div 
        :class="{
            'app-bg-dark': ThemeStatus === 'dark',
            'app-bg-light': ThemeStatus === 'light'
        }" 
        class="cart-layout-container" 
    >
        <NuxtLoadingIndicator color="#fd7403" />
        <div class="router-container py-5">
            <slot />
        </div>
       
        <div class="order-detail-container">
            <OrderDeatil />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cart-layout-container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    .router-container{
        width: 60%;
        height: 100vh;
        overflow-y: scroll;
    }
    .order-detail-container{
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media (max-width: 850px) {
    .cart-layout-container{
        flex-direction: column;
        .router-container{
            width: 100%;
        }
        .order-detail-container{
            width: 100%;
        }
    }
}
</style>