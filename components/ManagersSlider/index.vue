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
                v-for="n in 5"
                :key="n"
            >
                <ManagersCard class="mx-3 mt-3 mb-3" />
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script>
const model = ref(null)
</script>