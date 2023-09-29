<template>
    <button 
    :style="{'border-radius': `${borderRadius}`, 'width': `${width}`}"
    :class="{
        'app-bg-primary': background === 'primary', 
        'app-bg-secondary': background === 'secondary',
        'app-bg-gray': background === 'gray',
        'app-bg-light': background === 'light',
        'app-bg-white': background === 'white',
        'app-bg-dark': background === 'dark',
     }">
       <v-progress-circular :size="24" v-if="loading" indeterminate></v-progress-circular>
       <span v-else>
            {{ name }}
       </span>
    </button>
</template>

<script setup>
  const props = defineProps({
    name : {
        type : String,
        defult : "",
        required : false
    },
    background : {
        type : String,
        defult : "",
        required : false
    },
    borderRadius : {
        type : String,
        defult : "",
        required : false
    },
    width : {
        type : String,
        defult : "",
        required : false
    },
    loading : {
        type : Boolean,
        defult : false,
        required : false
    },
  })
</script>

<style scoped>
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 6px;
  }
</style>