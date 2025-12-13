import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loadWebUISettings, saveWebUISettings, type WebUISettings } from '@/utils/storage'

/**
 * Web UI 配置存储库
 */
export const useSettingsStore = defineStore('settings', () => {
  // Web UI 配置
  const webuiSettings = ref<WebUISettings>(loadWebUISettings())

  /**
   * 保存Web UI配置到本地存储
   */
  const saveWebUISettingsToStorage = () => {
    return saveWebUISettings(webuiSettings.value)
  }

  /**
   * 从本地存储恢复Web UI配置
   */
  const restoreWebUISettings = () => {
    const storedSettings = loadWebUISettings()
    webuiSettings.value = storedSettings
    return storedSettings
  }

  return {
    // 状态
    webuiSettings,

    // 方法
    saveWebUISettings: saveWebUISettingsToStorage,
    restoreWebUISettings,
  }
})
