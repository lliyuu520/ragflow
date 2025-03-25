import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const username = ref('astipsy')
  const avatar = ref('https://blog.astipsy.com/wp-content/uploads/2024/03/ooopic_1508466473.ico')

  // 更新用户信息
  const updateUser = (newUsername: string, newAvatar: string) => {
    username.value = newUsername
    avatar.value = newAvatar
  }

  // 更新用户名
  const setUsername = (newUsername: string) => {
    username.value = newUsername
  }

  // 更新头像
  const setAvatar = (newAvatar: string) => {
    avatar.value = newAvatar
  }

  return {
    username,
    avatar,
    updateUser,
    setUsername,
    setAvatar
  }
})