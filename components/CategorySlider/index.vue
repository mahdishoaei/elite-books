<template>
    <v-sheet
      class="mx-auto"
      max-width="800"
      style="background: none;"
    >
      <v-slide-group
        show-arrows
      >
        <v-slide-group-item
          v-for="category in categories"
          :key="category.id"
        >
          <CoreBtn
            :name="category.name"
            @click="handleSetCategory(category.name)"
            background="outline-primary-hover"
            width="150px"
            height="32px"
            borderRadius="5px" 
            class="mx-2"
          />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
</template>

<script setup>
import { productDS } from '@/stores/productData'
const productsDSModule = productDS()
const { data: response } = await useFetch('/api/products/books')

const handleSetCategory = async (categoryName) => {
  productsDSModule.books = response.value
  if(categoryName === "All Categories") {
    productsDSModule.books = response.value
  } else{
    productsDSModule.FilterByCategory(categoryName)
  }
}

const categories = ref([
    {
        id : 0,
        name : "All Categories"
    },
    {
        id : 1,
        name : "Biography"
    },
    {
        id : 2,
        name : "Fiction"
    },
    {
        id : 3,
        name : "Mystery"
    },
    {
        id : 4,
        name : "Fantasy"
    },
    {
        id : 5,
        name : "Romance"
    },
])
</script>