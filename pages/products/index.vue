<template>
    <div class="app-container">
        <div class="mt-10" >
            <CategorySlider />
        </div>
        <div class="mt-10 d-flex flex-wrap  justify-center align-center">
        <ProductCard
         v-for="item in booksInfo"
         :key="item.id"
         :name="item.name"
         :price="item.price"
         :category="item.category" 
         :img="item.img"
          />
    </div>
    </div>

</template>


<script setup>
import { productDS } from '@/stores/productData'
const products = productDS()

const booksInfo = computed(()=>{
     return products.books
    
})
</script>