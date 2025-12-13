<script setup lang="ts">
import { ElCol, ElRow } from 'element-plus'
import ButtonItem from '@/components/settings/ButtonItem.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 定义组件事件
const emit = defineEmits<{
  save: []
  discard: []
}>()

// 处理保存按钮点击事件 - 返回true
const handleSave = (): boolean => {
  emit('save')
  return true
}

// 处理放弃按钮点击事件 - 返回false
const handleDiscard = (): boolean => {
  emit('discard')
  return false
}
</script>

<template>
  <el-row>
    <el-col class="center button-row">
      <ButtonItem :text="t('保存配置')" type="primary" @click="handleSave" />
      <ButtonItem :text="t('放弃更改')" type="info" @click="handleDiscard" />
    </el-col>
  </el-row>
</template>

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-row {
  margin-top: 20px;
}
</style>
