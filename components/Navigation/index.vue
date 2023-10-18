<template>
    <div 
      :class="{
        'app-bg-dark': ThemeStatus === 'dark',
        'app-bg-light': ThemeStatus === 'light'
      }" 
      class="navigation"
    >
        <div 
          class="logo-container px-4 py-1"
        >
          <AppLogo />
          <div 
           class="d-flex justify-center align-center px-2"
          >
            <v-icon 
            class="app_pointer"
            @click="navigateTo('/cart')"
            >mdi-cart-outline</v-icon>
          </div>
          <div 
            class="d-flex justify-center align-center"
          >
            <ThemeSwichter />
          </div>
        </div>
        <div class="items-container">
            <span
              @click="navigateTo('/home')"
              :class="{'app_active_route': Route.path === '/home'}" 
              class="app_pointer app-font-size-14 app-font-weight-600 px-2 py-2"
            >
              Home
            </span>
            <span
              @click="navigateTo('/about')"
              :class="{'app_active_route': Route.path === '/about'}" 
              class="app_pointer app-font-size-14 app-font-weight-600 px-2 py-2"
            >
              About Us
            </span>
            <span
              @click="navigateTo('/contact')"
              :class="{'app_active_route': Route.path === '/contact'}"
              class="app_pointer app-font-size-14 app-font-weight-600 px-2 py-2"
            >
              Contact Us
            </span>
            <span
              @click="navigateTo('/products')"
              :class="{'app_active_route': Route.path === '/products'}" 
              class="app_pointer app-font-size-14 app-font-weight-600 px-2 py-2"
            >
              Products
            </span>
            <span
              @click="navigateTo('/search')"
              :class="{'app_active_route': Route.path === '/search'}" 
              class="app_pointer app-font-size-14 app-font-weight-600 px-2 py-2"
            >
              Search
            </span>
        </div>
        <div 
          class="auth-container d-flex justify-end align-center px-4"
        >
         <div 
          class="d-flex align-center"
         >
          <CoreBtn 
            class="mx-2"
            name="Sign In" 
            background="primary" 
            borderRadius="5px" 
            width="80px"
            height="32px"
            @click="navigateTo('/auth/login')"
          /> 
          <CoreBtn 
            name="Sign Up" 
            background="blue"  
            borderRadius="5px" 
            width="80px"
            height="32px"
            @click="navigateTo('/auth/register')"
          />
         </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { applicationTheme } from '@/stores/applicationTheme'

const ThemeDS = applicationTheme()
const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})

const Route = useRoute()
</script>

<style lang="scss">
.navigation{
    width: 100%;
    display: flex;
    box-shadow: 0 0 2px 0 #fd7403a2;
    .logo-container{
      width: 20%;
      display: flex;
    }
    .items-container{
      width: 55%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .auth-container{
      width: 25%;
    }
    @media (max-width: 800px) {
      .logo-container{
        width: 50%;
      }
      .items-container{
        display: none;
      }
      .auth-container{
        width: 50%;
      }
    }
}
</style>