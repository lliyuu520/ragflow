<template>
  <svg :color="props.color" :width="props.width" :height="props.height" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round">
    <path d="M10 12h11"></path>
    <path d="M10 18h11"></path>
    <path d="M10 6h11"></path>
    <path d="M4 10h2"></path>
    <path d="M4 6h1v4"></path>
    <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: {type: String, default: '#333'},    // 颜色，默认#333
  width: {type: String, default: '1em'},     // 宽度，默认1em
  height: {type: String, default: '1em'},    // 高度，默认1em
})
</script>