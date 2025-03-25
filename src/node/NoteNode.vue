<!-- 开始 -->
<template>
  <div class="custom-node">
    <div class="run">
      <IconNote width="14" height="14"/>
      <input class="ant-input css-1wxecgq noteName___STH6e css-1wxecgq" type="text" value="注释">
    </div>
    <div class="content">
      <textarea rows="3" placeholder="请输入注释" id="text" class="ant-input ant-input-status-success css-1wxecgq noteTextarea___F9nV3"></textarea>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconNote from '../icons/IconNote.vue'
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
  justify-content: space-between;
  gap: 6px;
}

input {
  box-sizing: border-box;
  margin: 0;
  padding: 0 4px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: Inter;
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  background-color: #ffffff;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  transition: all 0.2s;
}

input:focus {
  border-color: #1677ff;
  box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
  outline: 0;
}

textarea {
  resize: none;
  border: 0;
  border-radius: 0;
  height: 100%;
  width: 100%;
  min-height: 32px;
  line-height: 1.5714285714285714;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
  margin-top: 4px;
}

textarea:focus {
  border: none;
  box-shadow: none;
  outline: none;
}
</style>
