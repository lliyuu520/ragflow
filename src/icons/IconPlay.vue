<template>
    <svg :width="props.width" :height="props.height" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-play="true" xmlns="http://www.w3.org/2000/svg">
      <polygon points="6 3 20 12 6 21 6 3"></polygon>
    </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  width: { type: String, default: '1em' },     // 宽度，默认1em
  height: { type: String, default: '1em' },    // 高度，默认1em
})
</script>