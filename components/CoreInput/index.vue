<template>
    <div class="d-flex flex-column">
        <span class="app-font-size-12">
         {{ label }}
        </span>
        <input
            class="mt-1 mb-1"
            :class="{
            'app-color-white': ThemeStatus === 'dark', 
            'core-input-light': ThemeStatus === 'light',
            'core-input-dark': ThemeStatus === 'dark'
            }"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :type="type"
        >
        <span
         v-if="error"
         class="app-font-size-12 app-color-danger"
        >
           {{ messageError }}
        </span>
    </div>
</template>

<script setup lang="ts">
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

import { applicationTheme } from '@/stores/applicationTheme'
const ThemeDS = applicationTheme()

const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})
</script>

<style lang="scss" scoped>
input{
    width: 100%;
    height: 32px;
    outline: none;
    border-radius: 5px;
    padding: 5px 5px;
}    
.core-input-light{
    box-shadow: 1px 1px 1px 1px #cecccc;
}
.core-input-dark{
    box-shadow: 1px 1px 1px 1px #303030;
}
</style>