<script setup lang="ts">
import { ElAside, ElAvatar, ElBacktop, ElContainer, ElHeader, ElMain, ElText } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { ref, shallowRef } from 'vue'
import SettingsPage from '@/views/SettingsPage.vue'
import AboutPage from '@/views/AboutPage.vue'

const { t } = useI18n()
const menuItems = [
  { key: 'settings', label: t('项目配置'), component: SettingsPage },
  { key: 'about', label: t('关于项目'), component: AboutPage },
]
// 当前激活的菜单项
const activeMenu = ref('settings')
// 当前显示的组件
const currentComponent = shallowRef(SettingsPage)

// 处理菜单点击
const handleMenuSelect = (key: string) => {
  const menuItem = menuItems.find((item) => item.key === key)
  if (menuItem) {
    activeMenu.value = key
    currentComponent.value = menuItem.component
  }
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header style="display: flex; align-items: center; justify-content: center">
        <el-avatar
          src="src/assets/DouK-Downloader.png"
          size="large"
          alt="DouK-Downloader"
        ></el-avatar>
        <el-text size="large" style="margin-left: 15px">DouK Downloader Web UI</el-text>
      </el-header>
      <el-container>
        <el-aside width="15%"
          ><el-menu :default-active="activeMenu" @select="handleMenuSelect" class="aside-menu">
            <el-menu-item v-for="item in menuItems" :key="item.key" :index="item.key">
              {{ t(item.label) }}
            </el-menu-item>
          </el-menu></el-aside
        >
        <el-container>
          <el-main width="55%">
            <component :is="currentComponent" />
            <el-backtop :right="100" :bottom="100" />
          </el-main>
        </el-container>
        <el-aside width="30%">Aside</el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
