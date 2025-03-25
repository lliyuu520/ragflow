<template>
  <svg :color="props.color" :width="props.width" :height="props.height" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round">
    <line x1="3" x2="21" y1="6" y2="6"></line>
    <path d="M3 12h15a3 3 0 1 1 0 6h-4"></path>
    <polyline points="16 16 14 18 16 20"></polyline>
    <line x1="3" x2="10" y1="18" y2="18"></line>
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: {type: String, default: '#333'},    // 颜色，默认#333
  width: {type: String, default: '1em'},     // 宽度，默认1em
  height: {type: String, default: '1em'},    // 高度，默认1em
})
</script>