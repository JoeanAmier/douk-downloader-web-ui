<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ElText, ElLink } from 'element-plus'

const { t } = useI18n()
const project = 'https://github.com/JoeanAmier/TikTokDownloader'
const docs = 'https://github.com/JoeanAmier/TikTokDownloader/wiki/Documentation'
</script>

<template>
  <div>
    <el-text size="large">{{
      t(`
 TikTok 发布/喜欢/合辑/直播/视频/图集/音乐；抖音发布/喜欢/收藏/收藏夹/视频/图集/实况/直播/音乐/合集/评论/账号/搜索/热榜数据采集工具：完全开源，基于 HTTPX 模块实现的免费数据采集和文件下载工具；批量下载抖音账号发布、喜欢、收藏、收藏夹作品；批量下载 TikTok 账号发布、喜欢作品；下载抖音链接或 TikTok 链接作品；获取抖音直播拉流地址；下载抖音直播视频；获取 TikTok 直播拉流地址；下载 TikTok 直播视频；采集抖音作品评论数据；批量下载抖音合集作品；批量下载 TikTok 合辑作品；采集抖音账号详细数据；采集抖音用户 / 作品 / 直播搜索结果；采集抖音热榜数据。
 `)
    }}</el-text>
  </div>
  <div>
    <el-text size="large"
      >{{ t('项目开源地址：') }}<el-link :href="project" target="_blank" size="large">{{ project }}</el-link></el-text
    >
  </div>
  <div>
    <el-text size="large"
      >{{ t('项目完整文档：') }}<el-link :href="docs" target="_blank" size="large">{{ docs }}</el-link></el-text
    >
  </div>
</template>
<style scoped></style>
