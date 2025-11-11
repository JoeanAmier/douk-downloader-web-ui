<script lang="ts" setup>
import { computed } from 'vue'
import { ElSwitch, ElCol, ElRow, ElText } from 'element-plus'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Props {
  text: string
  params: string
  value: boolean
}

interface Emits {
  (e: 'update:value', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// 使用计算属性创建双向绑定
const switchValue = computed({
  get: () => props.value,
  set: (newValue: boolean) => emit('update:value', newValue),
})
</script>

<template>
  <el-row>
    <el-col :span="18">
      <el-text size="large">{{ text }}</el-text>
    </el-col>
    <el-col :span="6" class="justify-center">
      <el-switch
        v-model="switchValue"
        :id="params"
        size="large"
        :active-text="t('启用')"
        :inactive-text="t('禁用')"
      />
    </el-col>
  </el-row>
</template>

<style scoped>
.justify-center {
  display: flex;
  justify-content: center;
}
</style>
