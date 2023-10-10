<template>
    <div class="search-container">
        <div class="w-100 mt-2">
            <CoreInput
                label="Search by product name"
                v-model="searchValue"
            />
        </div>
        <div class="loading-container" v-if="loading">
         <span class="app-font-size-16 app-color-primary">
           Please wait...         
         </span>
         <CoreLoading />
        </div>
        <div class="empty-search-container __application_animation" v-if="emptystatus">
          <img 
            src="/empty-search.png" 
            alt="image"
          >
        </div>
    </div>
</template>

<script setup>
const loading = ref(false)
const emptystatus = ref(true)
const searchValue = ref('')

watch(searchValue, async (newValue, oldValue) => {
  loading.value = true
  emptystatus.value = false
  setTimeout(() => {
    loading.value = false
    emptystatus.value = true
  }, 1500);
})
</script>

<style lang="scss" scoped>
.search-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 200px;
    .empty-search-container{
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 250px;
            height: 250px;
        }
    }
    .loading-container{
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 250px;
            height: 250px;
        }
    }
}

@media (max-width: 1200px) {
    .search-container{
        padding: 20px 150px;
    }
}

@media (max-width: 1000px) {
    .search-container{
        padding: 20px 120px;
    }
}

@media (max-width: 800px) {
    .search-container{
        padding: 20px 80px;
    }
}

@media (max-width: 600px) {
    .search-container{
        padding: 20px 35px;
    }
}
</style>