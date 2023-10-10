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
            width="120px"
            height="32px"
            borderRadius="5px" 
            class="mx-2"
          />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </template>

<script setup>
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

const handleSetCategory = (categoryName) => {
  console.log(categoryName)
}
</script>