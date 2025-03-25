<template>
    <svg :color="props.color" :width="props.width" :height="props.height" stroke="white" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.331 3.324c0 .933-2.268 1.69-5.066 1.69s-5.066-.757-5.066-1.69m10.132 0c0-.932-2.268-1.688-5.066-1.688s-5.066.756-5.066 1.688m10.132 0v7.881c0 .935-2.252 1.689-5.066 1.689-2.815 0-5.066-.754-5.066-1.689v-7.88m10.132 3.94c0 .934-2.252 1.689-5.066 1.689-2.815 0-5.066-.755-5.066-1.69" stroke="currentColor" stroke-width="1.689" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: { type: String, default: '#333' },    // 颜色，默认#333
  width: { type: String, default: '1em' },     // 宽度，默认1em
  height: { type: String, default: '1em' },    // 高度，默认1em
})
</script>