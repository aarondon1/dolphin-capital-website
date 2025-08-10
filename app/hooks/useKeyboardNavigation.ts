"use client"

import { useEffect, useCallback } from 'react'

interface KeyboardNavigationOptions {
  onEscape?: () => void
  onEnter?: () => void
  onArrowUp?: () => void
  onArrowDown?: () => void
  onArrowLeft?: () => void
  onArrowRight?: () => void
  onTab?: () => void
  disabled?: boolean
}

export function useKeyboardNavigation(options: KeyboardNavigationOptions) {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (options.disabled) return

    switch (event.key) {
      case 'Escape':
        options.onEscape?.()
        break
      case 'Enter':
        options.onEnter?.()
        break
      case 'ArrowUp':
        event.preventDefault()
        options.onArrowUp?.()
        break
      case 'ArrowDown':
        event.preventDefault()
        options.onArrowDown?.()
        break
      case 'ArrowLeft':
        options.onArrowLeft?.()
        break
      case 'ArrowRight':
        options.onArrowRight?.()
        break
      case 'Tab':
        options.onTab?.()
        break
    }
  }, [options])

  useEffect(() => {
    if (!options.disabled) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, options.disabled])
}

// Focus management hook
export function useFocusManagement() {
  const focusElement = useCallback((selector: string) => {
    const element = document.querySelector(selector) as HTMLElement
    if (element) {
      element.focus()
    }
  }, [])

  const trapFocus = useCallback((containerSelector: string) => {
    const container = document.querySelector(containerSelector) as HTMLElement
    if (!container) return

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)
    return () => container.removeEventListener('keydown', handleTabKey)
  }, [])

  return { focusElement, trapFocus }
}
