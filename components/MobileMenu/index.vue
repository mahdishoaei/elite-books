<script setup lang="ts">
import { useRoute } from 'vue-router'
const Route = useRoute()
</script> 

<template>
  <div class="mobile-menu-container">

     <div 
      class="d-flex flex-column justify-center align-center px-3 py-1"
      :class="{'active_route': Route.path === '/home'}"
      @click="navigateTo('/home')"
    >
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
     </div>

     <div 
      class="d-flex flex-column justify-center align-center px-3 py-1"
      :class="{'active_route': Route.path === '/products'}"
      @click="navigateTo('/products')"
     >
        <v-icon>mdi-book-open-page-variant-outline</v-icon>
        <span>Products</span>
     </div>

    <div 
      class="d-flex flex-column justify-center align-center px-3 py-1"
      :class="{'active_route': Route.path === '/search'}"
      @click="navigateTo('/search')"
    >
        <v-icon>mdi-magnify</v-icon>
        <span>Search</span>
    </div>

    <div 
      class="d-flex flex-column justify-center align-center px-3 py-1"
      :class="{'active_route': Route.path === '/contact'}"
      @click="navigateTo('/contact')"
    >
      <v-icon>mdi-phone</v-icon>
      <span>Contact</span>
    </div>

    <div 
      class="d-flex flex-column justify-center align-center px-3 py-1"
      :class="{'active_route': Route.path === '/about'}"
      @click="navigateTo('/about')"
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