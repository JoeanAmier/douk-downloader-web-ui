<script setup lang="ts">
import { ElCard, ElCol, ElInput, ElMenu, ElMenuItem, ElRow } from 'element-plus'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import GeneralSettings from '@/components/settings/GeneralSettings.vue'
import ButtonGroup from '@/components/settings/ButtonGroup.vue'

const { t } = useI18n()
const activeIndex = ref('0')
const handleSelect = (key: string) => {
  activeIndex.value = key
}

// Web UI 配置
const webui_settings = {
  host: ref('localhost'),
  port: ref(8080),
}

const webui_project_settings = {
  host: 'localhost',
  port: 8080,
}

// 全局配置
const current_settings = {
  music: ref(true),
  desc_length: ref(100),
}

const project_settings = {
  music: true,
  desc_length: 100,
}

// Web UI 配置处理函数
const handleWebUISave = () => {
  webui_project_settings.host = webui_settings.host.value
  webui_project_settings.port = webui_settings.port.value
  console.log(t('Web UI 配置已保存:'), webui_project_settings)
}

const handleWebUIDiscard = () => {
  webui_settings.host.value = webui_project_settings.host
  webui_settings.port.value = webui_project_settings.port
  console.log(t('Web UI 配置已恢复为项目配置'))
}

// 全局配置处理函数
const handleUpdate = (key: keyof typeof current_settings, val: boolean | number) => {
  current_settings[key].value = val
}

const handleSave = () => {
  project_settings.music = current_settings.music.value
  project_settings.desc_length = current_settings.desc_length.value
  console.log(project_settings)
}

const handleDiscard = () => {
  current_settings.music.value = project_settings.music
  current_settings.desc_length.value = project_settings.desc_length
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
            v-model="webui_settings.host.value"
            :placeholder="t('请输入主机地址')"
            size="large"
          />
        </el-col>
        <el-col :span="4" class="center">
          <el-text size="large">{{ t('端口号：') }}</el-text>
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="webui_settings.port.value"
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
    <GeneralSettings
      :music="current_settings.music.value"
      :desc_length="current_settings.desc_length.value"
      @update:music="(val) => handleUpdate('music', val)"
      @update:desc_length="(val) => handleUpdate('desc_length', val)"
      @save="handleSave"
      @discard="handleDiscard"
    />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
