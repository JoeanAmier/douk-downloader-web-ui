<script setup lang="ts">
import BoolItem from '@/components/settings/BoolItem.vue'
import NumberItem from '@/components/settings/NumberItem.vue'
import ButtonItem from '@/components/settings/ButtonItem.vue'
import { ElRow, ElCol, ElMenu, ElMenuItem } from 'element-plus'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const boolValue = ref(true)
const numberValue = ref(1)
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">{{ t('全局配置') }}</el-menu-item>
    <el-menu-item index="2">{{ t('抖音配置') }}</el-menu-item>
    <el-menu-item index="3">{{ t('TikTok 配置') }}</el-menu-item>
  </el-menu>
  <BoolItem :text="t('是否下载作品音乐')" params="music" v-model:value="boolValue" />
  <NumberItem
    :text="t('文件下载最大线程数')"
    params="musicThreads"
    v-model:value="numberValue"
    :unit="t('线程')"
  />
  <el-row justify="center">
    <el-col :span="6">
      <ButtonItem :text="t('保存配置')" type="primary" />
    </el-col>
    <el-col :span="6">
      <ButtonItem :text="t('放弃更改')" type="info" />
    </el-col>
  </el-row>
</template>

<style scoped></style>
