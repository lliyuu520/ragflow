<!-- 知识检索 -->
<template>
  <div class="custom-node">
    <div class="run">
      <IconPlay width=".75rem" height=".75rem" class="cursor-pointer" />
      <span class=" cursor-pointer">运行结果</span>
    </div>
    <div class="content">
      <IconRocket width="1.5em" height="1.5em" color="rgb(56, 89, 116)" />
      <span class="node-label" v-bind="$attrs">知识检索</span>
    </div>

  </div>
</template>

<script lang="ts" setup>
import IconRocket from '../icons/IconRocket.vue'
import IconPlay from '../icons/IconPlay.vue'
</script>

<style scoped>
.custom-node {
  padding: 10px;
  background: #fff;
  box-shadow: -6px 0 12px #b3b1b114, -3px 0 6px -4px #0000001f, -6px 0 16px 6px #0000000d;
  border-radius: 10px;
  align-items: center;
}

.custom-node .run {
  display: flex;
  color: rgb(37 99 235);
  justify-content: right;
  align-items: center;
  gap: .5rem;
  font-size: 10px;
  padding-bottom: .25rem;
}

.custom-node .content {
  display: flex;
  gap: 10px;
  justify-content: center;
  font-weight: 600;
}

.node-label {
  color: #333;
  font-size: .875rem;
}
</style>
