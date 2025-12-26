<script setup lang="ts">
import BoolItem from '@/components/settings/BoolItem.vue'
import NumberItem from '@/components/settings/NumberItem.vue'
import StringItem from '@/components/settings/StringItem.vue'
import ButtonGroup from '@/components/settings/ButtonGroup.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Props {
  music: boolean
  desc_length: number
  folder_name: string
}

interface Emits {
  (e: 'update:music', value: boolean): void
  (e: 'update:desc_length', value: number): void
  (e: 'update:folder_name', value: string): void
  (e: 'save'): void
  (e: 'discard'): void
}
defineProps<Props>()
const emit = defineEmits<Emits>()
const handleMusicUpdate = (val: boolean) => {
  emit('update:music', val)
}

const handleDescLengthUpdate = (val: number) => {
  emit('update:desc_length', val)
}

const handleFolderNameUpdate = (val: string) => {
  emit('update:folder_name', val)
}

const handleSave = () => {
  emit('save')
}

const handleDiscard = () => {
  emit('discard')
}
</script>

<template>
  <StringItem
    :text="t('下载链接作品时保存文件夹的名称')"
    params="folder_name"
    :value="folder_name"
    placeholder="Download"
    @update:value="handleFolderNameUpdate"
  ></StringItem>
  <BoolItem
    :text="t('是否下载作品音乐')"
    params="music"
    :value="music"
    @update:value="handleMusicUpdate"
  />
  <NumberItem
    :text="t('文件名称描述字段长度限制')"
    params="desc_length"
    :value="desc_length"
    :unit="t('字符')"
    @update:value="handleDescLengthUpdate"
  />
  <ButtonGroup :save="handleSave" :discard="handleDiscard" />
</template>

<style scoped>
@import '@/assets/styles/Settings.css';
</style>
