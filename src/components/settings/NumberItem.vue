<script lang="ts" setup>
import { computed } from 'vue'
import { ElCol, ElInput, ElRow, ElText } from 'element-plus'

interface Props {
  text: string
  params: string
  value: number
  unit: string
}

interface Emits {
  (e: 'update:value', value: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// 使用计算属性创建双向绑定
const inputValue = computed({
  get: () => props.value,
  set: (newValue: number) => emit('update:value', newValue),
})
</script>

<template>
  <el-row>
    <el-col :span="6" class="justify-center">
      <el-text size="large">{{ params }}</el-text>
    </el-col>
    <el-col :span="12" class="justify-center">
      <el-text size="large">{{ text }}</el-text>
    </el-col>
    <el-col :span="6">
      <el-input v-model="inputValue" :id="params" size="large">
        <template #append>{{ unit }}</template>
      </el-input>
    </el-col>
  </el-row>
</template>

<style scoped>
@import '@/assets/styles/Settings.css';
</style>
