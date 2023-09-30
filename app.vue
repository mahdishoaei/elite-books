<script setup lang="ts">
import { applicationTheme } from '@/stores/applicationTheme'
const ThemeDS = applicationTheme()

const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})
</script>

<template>
 <div :class="{
  'app-bg-dark': ThemeStatus === 'dark',
  'app-bg-light': ThemeStatus === 'light'
}">
  <nuxtLayout>
    <nuxtPage/>
  </nuxtLayout>
 </div>
</template>