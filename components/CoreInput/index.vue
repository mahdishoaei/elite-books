<template>
    <div>
        <v-text-field
            clearable
            :label="label"
            variant="underlined"
            :model-value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :type="type"
        ></v-text-field>
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
    hasError: {
        type: Boolean,
        default: false,
        required: false,
    },
    textError: {
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