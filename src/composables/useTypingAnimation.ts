import { ref, onMounted, onUnmounted } from 'vue'

export function useTypingAnimation(texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const currentTypedText = ref('')
  let textIndex = 0
  let charIndex = 0
  let isDeleting = false
  let timeoutId: number

  const type = () => {
    const currentText = texts[textIndex]
    
    if (isDeleting) {
      currentTypedText.value = currentText.substring(0, charIndex - 1)
      charIndex--
    } else {
      currentTypedText.value = currentText.substring(0, charIndex + 1)
      charIndex++
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true
      timeoutId = setTimeout(type, pauseTime)
      return
    }
    
    if (isDeleting && charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
      timeoutId = setTimeout(type, typingSpeed)
      return
    }
    
    const speed = isDeleting ? deletingSpeed : typingSpeed
    timeoutId = setTimeout(type, speed)
  }

  onMounted(() => {
    type()
  })

  onUnmounted(() => {
    clearTimeout(timeoutId)
  })

  return {
    currentTypedText
  }
}
