
import { AuthorCard } from '.nuxt/components';
<template>
    <v-sheet
        style="background: none;"
        class="mx-auto"
        max-width="1100"
    >
        <v-slide-group
            v-model="model"
            class="pa-4"
            center-active
            selected-class="bg-success"
            show-arrows
        >
            <v-slide-group-item
                v-for="n in 10"
                :key="n"
            >
                <AuthorCard class="mx-3 mt-3 mb-3" />
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script>
const model = ref(null)
</script>