<template>
    <div>
       <h1>
        About Page...
       </h1>

       <span>
        {{ counterInfo }}
       </span>
    </div>
</template>

<script setup>
import { testStore } from '@/stores/testStore'
const counterDS = testStore()

const counterInfo = computed(() => {
    return counterDS.counter
})
</script>