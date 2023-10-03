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
            <v-icon class="app_pointer"
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
              :class="{'app_active_route': Route.path === '/home'}" 
              class="app_pointer app-font-size-14 app-font-weight-600 px-2 py-2"
            >
              Home
            </span>
            <span
              :class="{'app_active_route': Route.path === '/about'}" 
              class="app_pointer app-font-size-14 app-font-weight-600 px-2 py-2"
            >
              About Us
            </span>
           <span
            :class="{'app_active_route': Route.path === '/contact'}"
            class="app_pointer app-font-size-14 app-font-weight-600 px-2 py-2"
          >
              Contact Us
            </span>
            <span
              :class="{'app_active_route': Route.path === '/products'}" 
              class="app_pointer app-font-size-14 app-font-weight-600 px-2 py-2"
            >
              Products
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
            height="33px"
            @click="signIn"
          /> 
          <CoreBtn 
            name="Sign Up" 
            background="blue"  
            borderRadius="5px" 
            width="80px"
            height="33px"
            @click="signUp"
          />
         </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { applicationTheme } from '@/stores/applicationTheme'

const ThemeDS = applicationTheme()
const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})

const Router = useRouter()
const Route = useRoute()

const signIn = () => {
  Router.push('auth/login')
}

const signUp = () => {
  Router.push('auth/register')
}
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
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .auth-container{
      width: 30%;
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