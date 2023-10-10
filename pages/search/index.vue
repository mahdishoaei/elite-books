<template>
    <div class="app-container">
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

        <div class="mt-10 d-flex flex-wrap  justify-center align-center __application_animation" v-else>
            <ProductCard
                v-for="item in searchDataSource"
                :key="item.bookId"
                :author="item.author"
                :name="item.title"
                :price="item.price"
                :category="item.category" 
                :img="item.coverFileName"
            />
        </div>
    </div>
</template>

<script setup>
import { productDS } from '@/stores/productData'
const { data: response } = await useFetch('/api/products/books')

onMounted(async () => {
    productsDSModule.books = response.value
})

const productsDSModule = productDS()
const searchValue = ref('')

watch(searchValue, async (newValue, oldValue) => {
  productsDSModule.SearchInBooks(newValue)
})

const searchDataSource = computed(() => {
    return productsDSModule.search
})

const loading = computed(() => {
    return productsDSModule.searchLoading
})

const emptystatus = computed(() => {
    return productsDSModule.emptystatus
})
</script>

<style lang="scss" scoped>
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
</style>