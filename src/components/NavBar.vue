<template>
  <div class="nav-bar">
    <div class="left">
      <img src="https://demo.ragflow.io/logo.svg" alt="Logo" class="logo" />
      腾讯
    </div>
    <div class="center">
      <div class="btn-group">
        <button v-for="menu in meuns" :class="menu.active ? 'menu-btn active' : 'menu-btn'">
          <component :is="menu.icon" :color="menu.active ? '#ffffff' : '#333'" />
          {{ menu.name }}
        </button>
      </div>
    </div>
    <div class="right">
      <img class="avatar" :src="userStore.avatar"  alt="avatar"/>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  height: 72px;
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}

.left {
  width: 180px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}

.logo {
  width: 36px;
  height: 36px;
}

.center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center .btn-group {
  display: flex;
  background-color: #f9f9f9;
  border-radius: 6px;
}

.menu-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.2s;
  position: relative;
  border-radius: 6px;
  font-weight: bold;
  background-color: #f9f9f9;
}

.menu-btn.active {
  background-color: #1890ff;
  color: #ffffff;
}

.right {
  width: 180px;
  display: flex;
  justify-content: flex-end;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>

<script setup lang="ts">
import { ref, markRaw } from 'vue'
import IconKnowledge from '../icons/IconKnowledge.vue'
import IconChat from '../icons/IconChat.vue'
import IconSearch from '../icons/IconSearch.vue'
import IconAgent from '../icons/IconAgent.vue'
import IconFile from '../icons/IconFile.vue'
import { useUserStore } from '../stores/user'

const userStore = useUserStore()

const meuns = ref([
  { name: '知识库', icon: markRaw(IconKnowledge), active: false },
  { name: '聊天', icon: markRaw(IconChat), active: false },
  { name: '搜索', icon: markRaw(IconSearch), active: false },
  { name: 'Agent', icon: markRaw(IconAgent), active: true },
  { name: '文件管理', icon: markRaw(IconFile), active: false },
])
</script>