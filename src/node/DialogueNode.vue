<!-- 对话 -->
<template>
  <div class="custom-node">
    <div class="run">
      <IconSend width="1.5em" height="1.5em" color="rgb(244, 129, 109)" />
      <span class="node-label" v-bind="$attrs">对话</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconSend from '../icons/IconSend.vue'
</script>

<style scoped>
.custom-node {
  padding: 10px;
  background: #fff;
  box-shadow: -6px 0 12px #b3b1b114, -3px 0 6px -4px #0000001f, -6px 0 16px 6px #0000000d;
  border-radius: 10px;
  font-weight: 600;
}

.custom-node .run {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.custom-node .node-label {
  color: #333;
  font-size: .875rem;
}
</style>
