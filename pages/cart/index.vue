<template>
    <div class="app-container __application_animation">
        <div>
            <span class="app-font-size-16 app-font-weight-900">
                Your order cart in
            </span>
            <span class="app-font-size-18 app-font-weight-900 app-color-primary">
                Elite Books
            </span>
        </div>
        <div class="d-flex flex-wrap  justify-center align-center __application_animation">
            <ShoppingCart
                class="mx-2 mt-4"
                v-for="item in cardDataSource"
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