<template>
<div class="app-container">
    <div class="d-flex">
      <CoreBtn 
        @click="handleClick"
        :loading="loading"
        class="mx-2"
        name="Sign In" 
        background="primary" 
        borderRadius="5px" 
        width="120px"
      /> 
      <CoreBtn 
        :loading="loading"
        class="mx-2"
        name="Sign Up" 
        background="outline-primary"  
        borderRadius="5px" 
        width="120px"
      />
      <CoreBtn 
        :loading="loading"
        class="mx-2"
        name="Sign Up" 
        background="dark"  
        borderRadius="5px" 
        width="120px"
      />
    </div>
    
    <div class="mt-10">
        <CategorySlider />
    </div>

    <div class="mt-10">
      <ManagersSlider />
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