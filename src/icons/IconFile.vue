<template>
    <svg :color="props.color" :width="props.width" :height="props.height" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.907 4.45 7.28 3.194c-.18-.361-.27-.542-.405-.674a1.126 1.126 0 0 0-.421-.26c-.179-.061-.38-.061-.785-.061H3.517c-.63 0-.946 0-1.187.122-.212.108-.384.28-.492.492-.123.241-.123.557-.123 1.187v.45m0 0h8.557c.945 0 1.418 0 1.78.184.317.162.576.42.738.738.184.362.184.835.184 1.78V9.63c0 .946 0 1.419-.184 1.78-.162.318-.42.576-.738.738-.362.184-.835.184-1.78.184H4.417c-.945 0-1.418 0-1.78-.184a1.688 1.688 0 0 1-.738-.738c-.184-.361-.184-.834-.184-1.78V4.45Z" stroke="currentColor" stroke-width="1.689" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: { type: String, default: '#333' },    // 颜色，默认#333
  width: { type: String, default: '1em' },     // 宽度，默认1em
  height: { type: String, default: '1em' },    // 高度，默认1em
})
</script>