<template>
    <div
      class="core-card"
      :style="{'width': `${width}`}"
    >
      <slot name="cardContent"></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    width: {
        type: String,
        default : "",
        required : false
    }
})
</script>
  
<style lang="scss" scoped>
.core-card {
    transition: 0.5s;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 5px 0 #fd7403;
}
</style>