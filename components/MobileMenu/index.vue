<template>

    <v-layout class="overflow-visible" style="height: 56px;">
      <v-bottom-navigation
        v-model="value"
        :bg-color="color"
        mode="shift"
      >
        <v-btn>
          <v-icon>mdi-home</v-icon>
  
          <span>Home</span>
        </v-btn>
  
        <v-btn>
          <v-icon>mdi-information-slab-box-outline</v-icon>
  
          <span>About Us</span>
        </v-btn>
  
        <v-btn>
          <v-icon>mdi-book-open-page-variant-outline</v-icon>
  
          <span>Products</span>
        </v-btn>
  
        <v-btn>
          <v-icon>mdi-card-account-phone-outline</v-icon>
  
          <span>Contact Us</span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </template>
  <script>
    export default {
      data: () => ({ value: 1 }),
  
      computed: {
        color () {
          switch (this.value) {
            case 0: return 'pink-darken-4'
            case 1: return 'purple-darken-4'
            case 2: return 'deep-orange-accent-3'
            case 3: return 'green-darken-4'
            default: return 'black'
          }
        },
      },
    }
  </script>