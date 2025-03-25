<template>
    <svg :color="props.color" :width="props.width" :height="props.height" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M864 64H704V32c0-17.067-14.933-32-32-32s-32 14.933-32 32v32H384V32c0-17.067-14.933-32-32-32s-32 14.933-32 32v32H160c-17.067 0-32 14.933-32 32v896c0 17.067 14.933 32 32 32h704c17.067 0 32-14.933 32-32V96c0-17.067-14.933-32-32-32zm-32 896H192V128h128v64c0 17.067 14.933 32 32 32s32-14.933 32-32v-64h256v64c0 17.067 14.933 32 32 32s32-14.933 32-32v-64h128v832z" fill="#3b76f4"></path>
      <path d="M704 384H320c-17.067 0-32 14.933-32 32s14.933 32 32 32h384c17.067 0 32-14.933 32-32s-14.933-32-32-32zm0 256H320c-17.067 0-32 14.933-32 32s14.933 32 32 32h384c17.067 0 32-14.933 32-32s-14.933-32-32-32z" fill="#3b76f4"></path>
    </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: { type: String, default: '#333' },    // 颜色，默认#333
  width: { type: String, default: '1em' },     // 宽度，默认1em
  height: { type: String, default: '1em' },    // 高度，默认1em
})
</script>