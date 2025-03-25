<!-- 生成回答 -->
<template>
  <div class="custom-node">
    <div class="run">
      <IconPlay width=".75rem" height=".75rem" class="cursor-pointer" />
      <span class=" cursor-pointer">运行结果</span>
    </div>
    <div class="content">
      <IconLine width="1.5em" height="1.5em" color="rgb(219, 175, 246)" />
      <span class="node-label" v-bind="$attrs">条件</span>
    </div>
    <div class="parameters">
      <div class="condition-block">
        <div class="block-top">
          <span>Case 1</span>
          <span>If</span>
        </div>
        <div class="block-content">
          <div style="display: flex">
            <div class="condition">静态消息_000</div>
            <span class="condition-center">=</span>
            <div class="condition">1</div>
          </div>
        </div>
      </div>
      <div class="condition-block">
        <div class="block-top">
          <span>Case 2</span>
          <span>ElseIf</span>
        </div>
        <div class="block-content">
          <div style="display: flex">
            <div class="condition">静态消息_000</div>
            <span class="condition-center">=</span>
            <div class="condition">1</div>
          </div>
        </div>
      </div>
      <div class="condition-block">
        <div class="block-top">
          <span>Case 3</span>
          <span>ElseIf</span>
        </div>
        <div class="block-content">
          <div style="display: flex">
            <div class="condition">静态消息_000</div>
            <span class="condition-center">=</span>
            <div class="condition">1</div>
          </div>
        </div>
      </div>
      <div class="condition-block">
        <div class="block-top">
          <span></span>
          <span>Else</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconLine from '../icons/IconLine.vue'
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
  align-items: center;
  font-size: 14px;
  justify-content: center;
}

.parameters .condition-block .block-top {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.parameters .condition-block .block-content {
  border-radius: 4px;
  padding: 6px;
  background: rgba(150, 150, 150, .1);
  box-sizing: border-box;
  align-items: stretch;
  flex-direction: column;
}

.parameters .condition-block .block-content .condition {
  flex: 1 1;
  border-radius: 4px;
  padding: 2px 4px;
  background: rgba(150, 150, 150, .2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.parameters .condition-block .block-content .condition-center {
  padding: 0 2px;
  text-align: center;
}

</style>
