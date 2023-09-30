<template>
<div class="app-container">
    <div class="d-flex">
      
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