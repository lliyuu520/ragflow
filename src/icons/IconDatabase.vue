<template>
    <svg :color="props.color" :width="props.width" :height="props.height" viewBox="64 64 896 896" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"></path>
    </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: { type: String, default: '#333' },    // 颜色，默认#333
  width: { type: String, default: '1em' },     // 宽度，默认1em
  height: { type: String, default: '1em' },    // 高度，默认1em
})
</script>