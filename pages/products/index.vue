<template>
<div class="__application_animation py-10">
    <div class="mt-5 w-100" >
        <CategorySlider />
    </div>

    <div class="d-flex justify-center align-center" style="height: 70vh;" v-if="loading">
        <span class="app-font-size-16 app-color-primary">
           Please wait...         
         </span>
        <CoreLoading />
    </div>

    <div class="mt-10 d-flex flex-wrap  justify-center align-center __application_animation" v-else>
        <ProductCard
            class="mx-2 mt-4"
            v-for="item in cardDataSource"
            :key="item.bookId"
            :author="item.author"
            :name="item.title"
            :price="item.price"
            :category="item.category" 
            :img="item.coverFileName"
            :id="item.bookId"
        />
    </div>
</div>
</template>

<script setup>
import { productDS } from '@/stores/productData'
const { data: response } = await useFetch('/api/products/books')
const productsDSModule = productDS()

onMounted(async () => {
    productsDSModule.books = response.value
})

const cardDataSource = computed(()=>{
    return productsDSModule.books
})

const loading = computed(() => {
    return productsDSModule.productsLoading
})
</script>