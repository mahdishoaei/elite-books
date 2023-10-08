<template>
    <div class="d-flex flex-column">
        <v-text-field
            clearable
            :label="label"
            variant="underlined"
            :model-value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :type="type"
        ></v-text-field>
        <span
         v-if="error"
         class="app-font-size-14 app-color-danger"
        >
           {{ messageError }}
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: '',
        required: false
    },
    type: {
        type: String,
        default: '',
        required: false
    },
    error: {
        type: Boolean,
        default: false,
        required: false,
    },
    messageError: {
        type: String,
        default: "",
        required: false,
    },
    modelValue: {
        type: String,
        default: "",
        required: false,
    },
})
</script>