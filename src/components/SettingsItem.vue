<script setup lang="ts">
import BoolItem from '@/components/settings/BoolItem.vue'
import NumberItem from '@/components/settings/NumberItem.vue'
import ButtonItem from '@/components/settings/ButtonItem.vue'
import { ElRow, ElCol, } from 'element-plus'
import {ref} from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const boolValue = ref(true)
const numberValue = ref(1)
</script>

<template>
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
