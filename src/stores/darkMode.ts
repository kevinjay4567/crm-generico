import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', () => {
  const darkMode = ref(false)

  function toggleDarkMode() {
    darkMode.value = !darkMode.value
  }
  return { darkMode, toggleDarkMode }
})
