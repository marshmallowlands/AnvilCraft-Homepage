@ -1,68 +1,98 @@
<script setup lang="ts">
import { h, reactive, ref } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  PicLeftOutlined,
  InfoCircleOutlined,
  RedEnvelopeOutlined,
  GithubOutlined
} from '@ant-design/icons-vue';
import Icon from './assets/icon.svg';
import Curseforge from './assets/curseforge.svg';
import Modrinth from './assets/modrinth.svg';
import BiliBili from './assets/bilibili.svg';
import Mcmod from './assets/mcmod.svg';
import QQ from './assets/QQ.svg';
import KOOK from './assets/kook.svg';
import router from '@/router/index.ts';

const items = ref([
  {
    key: 'home',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
    url: '/'
  },
  {
    key: 'view',
    icon: () => h(PicLeftOutlined),
    label: '概览',
    title: '概览',
    url: '/view'
  },
  {
    key: 'about',
    icon: () => h(InfoCircleOutlined),
    label: '关于',
    title: '关于',
    url: '/about'
  },
  {
    key: 'support',
    icon: () => h(RedEnvelopeOutlined),
    label: '支持我们',
    title: '支持我们',
    url: '/support'
  }
]);
const state = reactive({
  collapsed: false,
  selectedKeys: ['home']
});

router.push('/');

function toggleCollapsed() {
  state.collapsed = !state.collapsed;
}

function select(page: any) {
  router.push(page.item.url);
}
</script>

<template>
  <a-page-header
    class="app-header"
    title="铁砧工艺"
    sub-title="一个原版风科技模组"
    @back="toggleCollapsed"
    :avatar="{ src: Icon }">
    <template #backIcon>
      <MenuUnfoldOutlined v-if="state.collapsed" />
      <MenuFoldOutlined v-else />
    </template>
    <template #extra>
      <a href="https://www.curseforge.com/minecraft/mc-mods/anvilcraft" target="_blank">
        <a-image :src="Curseforge" style="height: 32px; width: 32px" :preview="false" />
      </a>
      <a href="https://modrinth.com/mod/anvilcraft" target="_blank">
        <a-image :src="Modrinth" style="height: 32px; width: 32px" :preview="false" />
      </a>
      <a
        href="https://space.bilibili.com/5930630/channel/collectiondetail?sid=2530932"
        target="_blank">
        <a-image :src="BiliBili" style="height: 32px; width: 32px" :preview="false" />
      </a>
      <a href="https://www.mcmod.cn/class/14068.html" target="_blank">
        <a-image :src="Mcmod" style="height: 32px; width: 32px" :preview="false" />
      </a>
      <a href="https://github.com/Anvil-Dev/AnvilCraft" target="_blank">
        <GithubOutlined style="font-size: 30px; color: black" />
      </a>
      <a href="https://qm.qq.com/q/OO9MeRbPIm" target="_blank">
        <a-image :src="QQ" style="height: 32px; width: 32px" :preview="false" />
      </a>
      <a href="https://www.kookapp.cn/app/invite/mFBCbM" target="_blank">
        <a-image :src="KOOK" style="height: 32px; width: 32px" :preview="false" />
      </a>
    </template>
  </a-page-header>
  <a-layout>
    <a-layout-sider class="app-sider" :collapsed="state.collapsed" :trigger="null" collapsible>
      <a-menu
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        class="app-menu"
        :items="items"
        @select="select" />
    </a-layout-sider>
    <a-layout-content>
      <div class="app-scrollbar">
        <div class="app-content">
          <router-view />
        </div>
        <div class="app-footer">
          <span>
            ©
            <a href="https://github.com/Anvil-Dev" target="_blank">Anvil-Dev</a>
          </span>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<style scoped lang="scss">
.app-header {
  border: 1px solid rgb(235, 237, 240);
  background-color: #ffffff;
}

.app-sider {
  height: calc(100vh - 82px);
}

.app-menu {
  height: 100%;
  max-width: 280px;
}

.app-scrollbar {
  height: calc(100vh - 82px);
  overflow: auto;
  scrollbar-gutter: stable;
}

.app-footer {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-content {
  margin: 5px;
  min-height: calc(100vh - 173px);
}
</style>
