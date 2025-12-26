<script lang="ts" setup>
import { computed } from 'vue'
import { ElCol, ElInput, ElRow, ElText } from 'element-plus'

/**
 * 字符串输入框组件的属性接口
 * @property {string} text - 左侧显示的标签文本
 * @property {string} params - 输入框的唯一标识符，用于表单提交
 * @property {string} value - 绑定的字符串值
 * @property {string} [placeholder] - 输入框占位符文本，默认为空
 * @property {'text'|'password'|'textarea'} [type] - 输入框类型，默认为text
 * @property {number} [maxlength] - 最大输入长度限制，可选
 * @property {boolean} [showWordLimit] - 是否显示字数限制，默认为false
 */
interface Props {
  text: string
  params: string
  value: string
  placeholder?: string
  type?: 'text' | 'password' | 'textarea'
  maxlength?: number
  showWordLimit?: boolean
}

/**
 * 组件事件接口
 * @event update:value - 当输入值变化时触发，用于实现v-model双向绑定
 */
interface Emits {
  (e: 'update:value', value: string): void
}

// 使用withDefaults为可选属性设置默认值
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  maxlength: undefined,
  showWordLimit: false,
})

// 定义组件事件
const emit = defineEmits<Emits>()

/**
 * 计算属性：实现输入框值的双向绑定
 * 通过getter获取props.value，通过setter触发update:value事件
 */
const inputValue = computed({
  get: () => props.value,
  set: (newValue: string) => emit('update:value', newValue),
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
      <el-input
        v-model="inputValue"
        :id="params"
        :type="type"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :show-word-limit="showWordLimit"
        size="large"
      />
    </el-col>
  </el-row>
</template>

<style scoped>
@import '@/assets/styles/Settings.css';
</style>
