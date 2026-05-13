import { onMounted, onUnmounted } from 'vue'

interface Shortcut {
  key: string
  ctrl?: boolean
  alt?: boolean
  shift?: boolean
  meta?: boolean
  action: () => void
}

export function useKeyboardShortcuts(shortcuts: Shortcut[]) {
  const handleKeyDown = (event: KeyboardEvent) => {
    for (const shortcut of shortcuts) {
      const keyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase()
      const ctrlMatch = shortcut.ctrl ? event.ctrlKey : true
      const altMatch = shortcut.alt ? event.altKey : true
      const shiftMatch = shortcut.shift ? event.shiftKey : true
      const metaMatch = shortcut.meta ? event.metaKey : true
      
      if (keyMatch && ctrlMatch && altMatch && shiftMatch && metaMatch) {
        event.preventDefault()
        shortcut.action()
        break
      }
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
  })
}
