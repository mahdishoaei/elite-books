<template>
    <div 
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
          class="auth-container px-4"
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
          /> 
          <CoreBtn 
            name="Sign Up" 
            background="blue"  
            borderRadius="5px" 
            width="80px"
            height="33px"
          />
         </div>
      </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

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
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .auth-container{
      width: 30%;
      display: flex;
      justify-content: end;
      align-items: center;
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