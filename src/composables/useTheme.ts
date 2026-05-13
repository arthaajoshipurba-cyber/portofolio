import { ref, watch, onMounted } from 'vue'

export function useTheme() {
  const isDarkMode = ref(true)

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    updateTheme()
  }

  const updateTheme = () => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      isDarkMode.value = false
    } else {
      isDarkMode.value = true
    }
    updateTheme()
  }

  onMounted(() => {
    loadTheme()
  })

  return {
    isDarkMode,
    toggleTheme
  }
}
