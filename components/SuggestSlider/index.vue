<template>
    <v-sheet
        style="background: none;"
    >
        <v-slide-group
            v-model="model"
            class="pa-4"
            selected-class="bg-success"
            show-arrows
        >
            <v-slide-group-item
            v-for="item in cardDataSource"
            :key="item.bookId"
            >
            <ProductCard
            class="mx-2 mt-4"
            :author="item.author"
            :name="item.title"
            :price="item.price"
            :category="item.category" 
            :img="item.coverFileName"
        />
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
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
const model = ref(null);
</script>