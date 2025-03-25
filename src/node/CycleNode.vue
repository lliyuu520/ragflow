<!-- 生成回答 -->
<template>
  <div class="custom-node">
    <div class="run">
      <IconRefresh class="cursor-pointer" height=".75rem" width=".75rem"/>
      <span class="cursor-pointer">运行结果</span>
    </div>
    <div class="content">
      <span class="node-label" v-bind="$attrs">循环</span>
    </div>
    <div class="parameters">
      <div class="condition-block">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconRefresh from "../icons/IconRefresh.vue";
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

.parameters {
  display: grid;
  padding-top: 8px;
  gap: 8px;
  box-sizing: border-box;
  align-items: stretch;
}

.parameters .condition-block {
  gap: 6px;
  border-radius: 4px;
  padding: 6px;
  background: rgba(150, 150, 150, .1);
  display: flex;
  align-items: center;
  font-size: 14px;
}

</style>
