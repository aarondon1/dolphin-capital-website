"use client"

interface PerformanceMetric {
  name: string
  value: number
  timestamp: number
  url?: string
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = []
  private observer: PerformanceObserver | null = null

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObserver()
      this.trackPageLoad()
    }
  }

  private initializeObserver() {
    if ('PerformanceObserver' in window) {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric({
            name: entry.name,
            value: entry.duration || entry.startTime,
            timestamp: Date.now(),
            url: window.location.href
          })
        }
      })

      try {
        this.observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] })
      } catch (error) {
        console.warn('Performance observer not supported:', error)
      }
    }
  }

  private trackPageLoad() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          
          if (navigation) {
            this.recordMetric({
              name: 'page-load-time',
              value: navigation.loadEventEnd - navigation.fetchStart,
              timestamp: Date.now(),
              url: window.location.href
            })

            this.recordMetric({
              name: 'dom-content-loaded',
              value: navigation.domContentLoadedEventEnd - navigation.fetchStart,
              timestamp: Date.now(),
              url: window.location.href
            })
          }
        }, 0)
      })
    }
  }

  recordMetric(metric: PerformanceMetric) {
    this.metrics.push(metric)
    
    // Keep only last 100 metrics to prevent memory leaks
    if (this.metrics.length > 100) {
      this.metrics = this.metrics.slice(-100)
    }

    // In production, send to analytics service
    if (process.env.NODE_ENV === 'production') {
      this.sendToAnalytics(metric)
    }
  }

  private sendToAnalytics(metric: PerformanceMetric) {
    // Example: Send to Google Analytics, DataDog, etc.
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metric', {
        metric_name: metric.name,
        metric_value: metric.value,
        custom_parameter: metric.url
      })
    }
  }

  getMetrics(): PerformanceMetric[] {
    return [...this.metrics]
  }

  clearMetrics() {
    this.metrics = []
  }

  measureFunction<T>(name: string, fn: () => T): T {
    const start = performance.now()
    const result = fn()
    const end = performance.now()
    
    this.recordMetric({
      name: `function-${name}`,
      value: end - start,
      timestamp: Date.now()
    })
    
    return result
  }

  async measureAsyncFunction<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now()
    const result = await fn()
    const end = performance.now()
    
    this.recordMetric({
      name: `async-function-${name}`,
      value: end - start,
      timestamp: Date.now()
    })
    
    return result
  }
}

export const performanceMonitor = new PerformanceMonitor()

// React hook for component performance tracking
export function usePerformanceTracking(componentName: string) {
  const trackRender = () => {
    performanceMonitor.recordMetric({
      name: `component-render-${componentName}`,
      value: performance.now(),
      timestamp: Date.now()
    })
  }

  return { trackRender }
}
