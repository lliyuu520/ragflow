<template>
  <svg :color="props.color" :width="props.width" :height="props.height" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round">
    <path d="M12 13v8"></path>
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
    <path d="m8 17 4-4 4 4"></path>
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: {type: String, default: '#333'},    // 颜色，默认#333
  width: {type: String, default: '1em'},     // 宽度，默认1em
  height: {type: String, default: '1em'},    // 高度，默认1em
})
</script>