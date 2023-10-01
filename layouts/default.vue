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
        class="default-layout-container" 
    >
        <div class="nav-container">
            <Navigation />
        </div>
         <div class="router-container">
             <slot />
         </div>
       
        <div class="mobile-menu-container">
            <MobileMenu />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.default-layout-container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .nav-container{
        width: 100%;
        height: 12vh;
    }
    .router-container{
        width: 100%;
        height: 88vh;
        overflow-y: scroll;
    }
    .mobile-menu-container{
        display: none;
    }
}

@media (max-width: 800px) {
   .default-layout-container{
      .router-container{
        height: 78vh;
      }
      .mobile-menu-container{
        display: flex;
        height: 10vh;
      }
   }
}
</style>