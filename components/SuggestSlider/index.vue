<template>
    <v-sheet
        style="background: none;"
    >
        <v-slide-group
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

const props = defineProps ({
    dataSource : {
        type: Array,
        default: [],
        required: false
    }
})
const cardDataSource = computed(()=>{
    return props.dataSource
})
</script>