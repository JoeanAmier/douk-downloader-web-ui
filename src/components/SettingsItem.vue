<script setup lang="ts">
import BoolItem from '@/components/settings/BoolItem.vue'
import {ref} from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const value = ref(true)
</script>

<template>
  <BoolItem :text="t('是否下载作品音乐')" params="music" v-model:value="value" />
</template>

<style scoped></style>
