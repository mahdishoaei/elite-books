<template>
    <v-sheet
        style="background: none;"
    >
        <v-slide-group
            v-model="model"
            class="pa-4"
            center-active
            selected-class="bg-success"
            show-arrows
        >
            <v-slide-group-item
                v-for="item in authorInfo"
                :key="item.id"
            >
                <AuthorCard 
                :name="item.name"
                :position="item.position" 
                :img="item.img"                 
                class="mx-3 mt-3 mb-3" 
                />
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script setup>
import { authorDS } from '@/stores/authorData'
const author = authorDS()

const authorInfo = computed(()=>{
     return author.authors
    
})
const model = ref(null)
</script>