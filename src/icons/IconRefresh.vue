<template>
  <svg xmlns="http://www.w3.org/2000/svg" :color="props.color" :width="props.width" :height="props.height" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"></path>
    <polyline points="16 14 20 18 16 22"></polyline><
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: { type: String, default: '#333' },    // 颜色，默认#333
  width: { type: String, default: '1em' },     // 宽度，默认1em
  height: { type: String, default: '1em' },    // 高度，默认1em
})
</script>