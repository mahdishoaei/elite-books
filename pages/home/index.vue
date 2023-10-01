<template>
<div class="d-flex flex-column">  
    <div class="mt-10"></div>

    <div class="mt-10">
        <CaresoulSection />
    </div>

    <div class="mt-10">
      <ManagersSlider />
    </div>

    <div class="mt-10">
      <AuthorSlider />
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

