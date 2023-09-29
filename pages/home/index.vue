<template>
    <div class="app-container">
       <div class="d-flex">
        <CoreBtn 
        @click="handleClick"
        :loading="loading"
        class="mx-2"
        name="hello" 
        background="primary" 
        borderRadius="5px" 
        width="120px"/> 
       <CoreBtn 
        :loading="loading"
        class="mx-2"
        name="bye" 
        background="secondary"  
        borderRadius="5px" 
        width="120px"/>
       </div>
        
        <div>
            <CategorySlider />
        </div>
        
    </div>
</template>

<script setup>
  const loading = ref(false)

  const handleClick = () =>{
     loading.value = true
     setTimeout(() => {
       loading.value = false
     },3000)
  }
</script>