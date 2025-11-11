<script lang="ts" setup>
import { ElButton,  } from 'element-plus'

interface Props {
  text: string
  type: 'primary' | 'success' | 'warning' | 'danger' | 'info'
}

interface Emits {
  (e: 'click'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleClick = () => {
  emit('click')
}

</script>

<template>
    <el-button :type="props.type" size="large" @click="handleClick">{{text}}</el-button>
</template>
