<template>
    <div>
        <v-text-field
            clearable
            :label="label"
            variant="underlined"
        ></v-text-field>
    </div>
</template>

<script setup>
const props = defineProps({
    label : {
        type: String
    }
})
</script>