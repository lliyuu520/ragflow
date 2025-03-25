<template>
    <svg :color="props.color" :width="props.width" :height="props.height" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path xmlns="http://www.w3.org/2000/svg" d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z" fill="#fff"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8Z" fill="#fff"/>
    </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: { type: String, default: '#333' },    // 颜色，默认#333
  width: { type: String, default: '1em' },     // 宽度，默认1em
  height: { type: String, default: '1em' },    // 高度，默认1em
})
</script>