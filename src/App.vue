@ -1,68 +1,98 @@
<script setup lang="ts">
import {h, onMounted, reactive, ref, watch} from "vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined
} from '@ant-design/icons-vue';
import {ItemType} from "ant-design-vue";
import Icon from "./assets/icon.svg";

const items = ref<ItemType[]>([
  {
    key: 'home',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '/',
  },
  {
    key: 'view',
    icon: () => h(PicLeftOutlined),
    label: '概览',
    title: '/view'
  },
  {
    key: 'about',
    icon: () => h(InfoCircleOutlined),
    label: '关于',
    title: '/about'
  },
  {
    key: 'support',
    icon: () => h(RedEnvelopeOutlined),
    label: '支持我们',
    title: '/support'
  }
]);
const state = reactive({
  collapsed: false,
  selectedKeys: ['home'],
});

router.push('/');

function toggleCollapsed() {
  state.collapsed = !state.collapsed;
}

onMounted(() => {
  getElementAttr('header', 'offsetHeight', 'header-height');
  getElementAttr('menu', 'offsetWidth', 'menu-width');
})

function getElementAttr(id: string, attr: 'offsetHeight' | 'offsetWidth', variable: string) {
  const element = document.getElementById(id);
  if (element) {
    console.log(element[attr]);
    const root: any = document.querySelector(':root');
    if (root) {
      root.style.setProperty(`--${variable}`, element.offsetHeight + "px");
    }
  }
}

function select(page: any) {
  router.push(page.item.title);
}
</script>

<template>
  <a-page-header class="app-header"
                 title="铁砧工艺"
                 sub-title="一个原版风科技模组"
                 @back="toggleCollapsed"
                 :avatar="{ src:Icon }"
  >
    <template #backIcon>
      <MenuUnfoldOutlined v-if="state.collapsed"/>
      <MenuFoldOutlined v-else/>
    </template>
    <template #extra>
      <a href="https://www.curseforge.com/minecraft/mc-mods/anvilcraft" target="_blank">
        <a-image :src="Curseforge" style="height:32px;width:32px" :preview="false"/>
      </a>
      <a href="https://modrinth.com/mod/anvilcraft" target="_blank">
        <a-image :src="Modrinth" style="height:32px;width:32px" :preview="false"/>
      </a>
      <a href="https://space.bilibili.com/5930630/channel/collectiondetail?sid=2530932" target="_blank">
        <a-image :src="BiliBili" style="height:32px;width:32px" :preview="false"/>
      </a>
      <a href="https://www.mcmod.cn/class/14068.html" target="_blank">
        <a-image :src="Mcmod" style="height:32px;width:32px" :preview="false"/>
      </a>
      <a href="https://github.com/Anvil-Dev/AnvilCraft" target="_blank">
        <GithubOutlined style="font-size: 30px;color: black"/>
      </a>
      <a href="https://qm.qq.com/q/OO9MeRbPIm" target="_blank">
        <a-image :src="QQ" style="height:32px;width:32px" :preview="false"/>
      </a>
      <a href="https://www.kookapp.cn/app/invite/mFBCbM" target="_blank">
        <a-image :src="KOOK" style="height:32px;width:32px;" :preview="false"/>
      </a>
    </template>
  </a-page-header>
  <a-layout>
    <a-layout-sider class="app-sider">
      <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        class="app-menu"
        :inline-collapsed="state.collapsed"
        :items="items"
        @select="select" />
    </a-layout-sider>
    <a-layout-content>
      <div class="app-scrollbar">
        <div class="app-content">
          <router-view />
        </div>
        <div class="app-footer">
          <span>©Anvil-Dev</span>
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
  min-height: calc(100vh - 173px);
}
</style>
