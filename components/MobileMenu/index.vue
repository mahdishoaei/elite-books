<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const Route = useRoute()
const Router = useRouter()

const navigateToHome = () => {
  Router.push('/home')
}

const navigateToAbout = () => {
  Router.push('about')
}

const navigateToContact = () => {
  Router.push('contact')
}

const navigateToProducts = () => {
  Router.push('products')
}
</script> 

<template>
  <div class="mobile-menu-container">

     <div 
      class="d-flex flex-column justify-center align-center px-3 py-1"
      :class="{'active_route': Route.path === '/home'}"
      @click="navigateToHome"
    >
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
     </div>

     <div 
      class="d-flex flex-column justify-center align-center px-3 py-1"
      :class="{'active_route': Route.path === '/products'}"
      @click="navigateToProducts"
     >
        <v-icon>mdi-book-open-page-variant-outline</v-icon>
        <span>Products</span>
     </div>

    <div 
      class="d-flex flex-column justify-center align-center px-3 py-1"
      :class="{'active_route': Route.path === '/search'}"
    >
        <v-icon>mdi-magnify</v-icon>
        <span>Search</span>
    </div>

    <div 
      class="d-flex flex-column justify-center align-center px-3 py-1"
      :class="{'active_route': Route.path === '/contact'}"
      @click="navigateToContact"
    >
      <v-icon>mdi-phone</v-icon>
      <span>Contact</span>
    </div>

    <div 
      class="d-flex flex-column justify-center align-center px-3 py-1"
      :class="{'active_route': Route.path === '/about'}"
      @click="navigateToAbout"
    >
      <v-icon>mdi-text</v-icon>
      <span>About</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-menu-container{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .active_route{
    border-radius: 20px;
    background: #fd7403;
    color: #fff;
  }
}
</style>