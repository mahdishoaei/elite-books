<template>
    <div class="app-container">
       
        <div class="mt-10">
            <div class="d-flex justify-center align-center">
                <CoreDivider :name="`Similar books for ${Route.params.category}`" width="auto" />
            </div >
        </div >

        <div class="d-flex flex-wrap justify-center align-center mt-6 ">
            <ProductCard
            class="mt-2 mx-2"
             v-for="item in categorySuggest"
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
import { useRoute } from 'vue-router'
import { productDS } from '@/stores/productData'
const { data: response } = await useFetch('/api/products/books')

const productsDSModule = productDS()
const Route = useRoute()

const categorySuggest = computed(() => {
    return productsDSModule.categorySuggest
})

onMounted(() => {
   productsDSModule.books = response.value
   productsDSModule.FilterByCategoryForSuggest(Route.params.category)
})
</script>