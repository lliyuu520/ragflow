<template>
  <svg :color="props.color" :width="props.width" :height="props.height" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round">
    <path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"></path>
    <path d="M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"></path>
    <path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"></path>
    <path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"></path>
    <path d="M9 7v10"></path>
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: {type: String, default: '#333'},    // 颜色，默认#333
  width: {type: String, default: '1em'},     // 宽度，默认1em
  height: {type: String, default: '1em'},    // 高度，默认1em
})
</script>