<script setup lang="ts">
import { ElCard, ElCol, ElInput, ElMenu, ElMenuItem, ElMessage, ElRow } from 'element-plus'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/settings'
import GeneralSettings from '@/components/settings/GeneralSettings.vue'
import ButtonGroup from '@/components/settings/ButtonGroup.vue'
import DouYinSettings from '@/components/settings/DouYinSettings.vue'
import TikTokSettings from '@/components/settings/TikTokSettings.vue'

const { t } = useI18n()
const settingsStore = useSettingsStore()

const activeIndex = ref('0')
const handleSelect = (key: string) => {
  activeIndex.value = key
}

const current_settings = {
  music: ref(true),
  desc_length: ref(100),
  folder_name: ref('Download'),
}

const project_settings = {
  music: true,
  desc_length: 100,
  folder_name: 'Download',
}

// Web UI 配置处理函数
const handleWebUISave = () => {
  if (settingsStore.saveWebUISettings()) {
    ElMessage.success(t('Web UI 配置已保存'))
  } else {
    ElMessage.error(t('保存配置失败，请重试'))
  }
}

const handleWebUIDiscard = () => {
  settingsStore.restoreWebUISettings()
  ElMessage.info(t('Web UI 配置已恢复为保存的配置'))
  console.log(t('Web UI 配置已恢复为保存的配置'))
}

// 全局配置处理函数
const handleUpdate = (key: keyof typeof current_settings, val: boolean | number | string) => {
  current_settings[key].value = val
}

const handleSave = () => {
  project_settings.music = current_settings.music.value
  project_settings.desc_length = current_settings.desc_length.value
  project_settings.folder_name = current_settings.folder_name.value
  ElMessage.success(t('全局配置已保存'))
}

const handleDiscard = () => {
  current_settings.music.value = project_settings.music
  current_settings.desc_length.value = project_settings.desc_length
  current_settings.folder_name.value = project_settings.folder_name
  ElMessage.info(t('全局配置已恢复为默认配置'))
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    size="large"
  >
    <el-menu-item index="0">{{ t('Web UI 配置') }}</el-menu-item>
    <el-menu-item index="1">{{ t('全局配置') }}</el-menu-item>
    <el-menu-item index="2">{{ t('抖音配置') }}</el-menu-item>
    <el-menu-item index="3">{{ t('TikTok 配置') }}</el-menu-item>
  </el-menu>

  <div v-show="activeIndex === '0'">
    <el-card>
      <el-row :gutter="12">
        <el-col :span="4" class="center">
          <el-text size="large">{{ t('主机地址：') }}</el-text>
        </el-col>
        <el-col :span="10">
          <el-input
            v-model="settingsStore.webuiSettings.host"
            :placeholder="t('请输入主机地址')"
            size="large"
          />
        </el-col>
        <el-col :span="4" class="center">
          <el-text size="large">{{ t('端口号：') }}</el-text>
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="settingsStore.webuiSettings.port"
            type="number"
            :placeholder="t('请输入端口号')"
            :min="1"
            :max="65535"
            size="large"
          />
        </el-col>
      </el-row>
      <ButtonGroup @save="handleWebUISave" @discard="handleWebUIDiscard" />
    </el-card>
  </div>

  <div v-show="activeIndex === '1'">
    <el-card>
      <GeneralSettings
        :music="current_settings.music.value"
        :desc_length="current_settings.desc_length.value"
        :folder_name="current_settings.folder_name.value"
        @update:music="(val) => handleUpdate('music', val)"
        @update:desc_length="(val) => handleUpdate('desc_length', val)"
        @update:folder_name="(val) => handleUpdate('folder_name', val)"
        @save="handleSave"
        @discard="handleDiscard"
      />
    </el-card>
  </div>

  <div v-show="activeIndex === '2'">
    <el-card>
      <DouYinSettings></DouYinSettings>
    </el-card>
  </div>

  <div v-show="activeIndex === '3'">
    <el-card>
      <TikTokSettings></TikTokSettings>
    </el-card>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
