<template>
  <svg :color="props.color" :width="props.width" :height="props.height" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round">
    <rect width="20" height="12" x="2" y="6" rx="6" ry="6"></rect>
    <circle cx="8" cy="12" r="2"></circle>
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: {type: String, default: '#333'},    // 颜色，默认#333
  width: {type: String, default: '1em'},     // 宽度，默认1em
  height: {type: String, default: '1em'},    // 高度，默认1em
})
</script>