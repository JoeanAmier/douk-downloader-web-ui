<script setup lang="ts">
import BoolItem from '@/components/settings/BoolItem.vue'
import NumberItem from '@/components/settings/NumberItem.vue'
import ButtonItem from '@/components/settings/ButtonItem.vue'
import { ElCol, ElRow } from 'element-plus'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Props {
  music: boolean
  desc_length: number
}

interface Emits {
  (e: 'update:music', value: boolean): void
  (e: 'update:desc_length', value: number): void
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

const handleSave = () => {
  emit('save')
}

const handleDiscard = () => {
  emit('discard')
}
</script>

<template>
  <BoolItem
    :text="t('是否下载作品音乐')"
    params="music"
    :value="music"
    @update:value="handleMusicUpdate"
  />
  <NumberItem
    :text="t('描述字段长度限制')"
    params="desc_length"
    :value="desc_length"
    :unit="t('字符')"
    @update:value="handleDescLengthUpdate"
  />
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
