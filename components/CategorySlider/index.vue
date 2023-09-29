<template>
    <v-sheet
      class="mx-auto"
      max-width="600"
    >
      <v-slide-group
        show-arrows
      >
        <v-slide-group-item
          v-for="category in categories"
          :key="category.id"
          v-slot="{ isSelected, toggle }"
        >
          <v-btn
            class="ma-2"
            :color="isSelected ? 'primary' : undefined"
            @click="toggle"
          >
            {{ category.name }}
          </v-btn>
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
</script>