/**
 * Web UI 配置持久化存储
 */

// 存储键名
const STORAGE_KEY = 'douk_downloader_webui_settings'

// Web UI 配置接口
export interface WebUISettings {
  host: string
  port: number
}

// 默认配置
export const DEFAULT_WEBUI_SETTINGS: WebUISettings = {
  host: '127.0.0.1',
  port: 5555,
}

/**
 * 从localStorage加载Web UI配置
 */
export function loadWebUISettings(): WebUISettings {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error('加载 Web UI 配置失败:', error)
  }
  return DEFAULT_WEBUI_SETTINGS
}

/**
 * 保存Web UI配置到localStorage
 */
export function saveWebUISettings(settings: WebUISettings): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    return true
  } catch (error) {
    console.error('保存 Web UI 配置失败:', error)
    return false
  }
}
