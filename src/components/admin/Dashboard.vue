<template>
  <div class="flex h-screen bg-gray-100 font-sans">
    <!-- 侧边栏 -->
    <aside class="w-64 bg-white shadow-md">
      <div class="p-4">
        <h1 class="text-2xl font-bold text-gray-800">新闻管理系统</h1>
      </div>
      <nav class="mt-4">
        <a href="#" class="flex items-center px-4 py-2 text-gray-700 bg-gray-200">
          <i class="mr-2 iconfont icon-yibiaopan"></i>
          仪表盘
        </a>
        <a href="#" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <i class="mr-2 iconfont icon-wenzhangguanli"></i>
          文章管理
        </a>
        <a href="#" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <i class="mr-2 iconfont icon-yonghuguanli"></i>
          用户管理
        </a>
        <a href="#" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <i class="mr-2 iconfont icon-xitongshezhi"></i>
          系统设置
        </a>
      </nav>
    </aside>

    <!-- 主要内容 -->
    <main class="flex-1 overflow-y-auto">
      <!-- 顶部栏 -->
      <header class="bg-white shadow-sm">
        <div class="flex items-center justify-between px-4 py-3">
          <div class="flex items-center">
            <input type="search"  placeholder="搜索..." class="rounded-lg w-64 mr-2 p-2 border border-gray-300" />
            <button class="p-2 border-gray-300 rounded">
              <i class="iconfont icon-sousuo"></i>  
            </button>
          </div>
          <div class=" flex items-center">
            <button class="p-2 mr-2 border border-transparent hover:bg-gray-100 rounded">
              <i class="iconfont icon-tongzhi"></i>
             </button>
            <select class="w-[180px] p-2 border border-gray-300 rounded">
              <option>张三</option>
              <option value="profile">个人资料</option>
              <option value="settings">设置</option>
              <option value="logout">退出登录</option>
            </select>
          </div>
        </div>
      </header>

      <!-- 仪表盘内容 -->
      <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">仪表盘</h2>

        <!-- 快速统计 -->
        <div class="grid grid-cols-1 md:grid-cols-3  gap-6 mb-6">
          <div class="bg-white p-4 shadow rounded-lg">
            <div class="flex justify-between">
              <h3 class="text-sm font-medium">文章总数</h3>
            </div>
            <div class="text-2xl font-bold">245</div>
            <p class="text-xs text-muted-foreground">较上月增长20%</p>
          </div>
          <div class="bg-white p-4 shadow rounded-lg">
            <div class="flex justify-between">
              <h3 class="text-sm font-medium">活跃用户</h3>
            </div>
            <div class="text-2xl font-bold">1,234</div>
            <p class="text-xs text-muted-foreground">较上周增长5%</p>
          </div>
          <div class="bg-white p-4 shadow rounded-lg">
            <div class="flex justify-between">
              <h3 class="text-sm font-medium">参与率</h3>
            </div>
            <div class="text-2xl font-bold">58.9%</div>
            <p class="text-xs text-muted-foreground">较上周增长2.4%</p>
          </div>
        </div>

        <!-- 最近文章 -->
        <div class="bg-white shadow rounded-lg mb-6">
          <div class="p-4 flex justify-between">
            <h3 class="text-lg font-medium">最近文章</h3>
            <p>共有 {{ recentArticles.length }} 篇文章</p>
          </div>
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-4 py-2 text-left">标题</th>
                <th class="px-4 py-2 text-left">作者</th>
                <th class="px-4 py-2 text-left">日期</th>
                <th class="px-4 py-2 text-left">状态</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="article in recentArticles" :key="article.id">
                <td class="px-4 py-2 font-medium">{{ article.title }}</td>
                <td class="px-4 py-2">{{ article.author }}</td>
                <td class="px-4 py-2">{{ article.date }}</td>
                <td class="px-4 py-2">{{ article.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 快速操作 -->
        <div class="bg-white shadow rounded">
          <div class="p-4">
            <h3 class="text-lg font-medium">快速操作</h3>
            <div class="flex mt-3 gap-4">
              <button class="p-2 bg-blue-500 text-white rounded">新建文章</button>
              <button class="p-2 border border-gray-300 rounded">管理用户</button>
              <button class="p-2 border border-gray-300 rounded">查看所有文章</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const recentArticles = ref([
  { id: 1, title: "突发：发现新型新冠病毒变种", author: "张三", date: "2024-10-26", status: "已发布" },
  { id: 2, title: "科技巨头宣布革命性人工智能", author: "李四", date: "2024-10-25", status: "草稿" },
  { id: 3, title: "全球气候峰会达成历史性协议", author: "王五", date: "2024-10-24", status: "审核中" },
  { id: 4, title: "股市创历史新高", author: "赵六", date: "2024-10-23", status: "已发布" },
  { id: 5, title: "重要体育队伍赢得冠军", author: "孙七", date: "2024-10-22", status: "草稿" },
]);
</script>

<style scoped>
i{
  font-size: 20px;
}
</style>
