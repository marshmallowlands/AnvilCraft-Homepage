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
    key: 'mail',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  }
]);
const state = reactive({
  collapsed: false,
  selectedKeys: ['mail'],
  openKeys: [],
  preOpenKeys: [],
});

watch(
    () => state.openKeys,
    (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    },
);

function toggleCollapsed() {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
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
</script>

<template>
  <a-page-header id="header" class="header"
                 title="铁砧工艺"
                 sub-title="一个原版风科技模组"
                 @back="toggleCollapsed"
                 :avatar="{src:Icon}"
  >
    <template #backIcon>
      <MenuUnfoldOutlined v-if="state.collapsed"/>
      <MenuFoldOutlined v-else/>
    </template>
  </a-page-header>
  <a-flex gap="middle" :vertical="false">
    <a-menu id="menu" class="menu"
            v-model:openKeys="state.openKeys"
            v-model:selectedKeys="state.selectedKeys"
            mode="inline"
            :inline-collapsed="state.collapsed"
            :items="items"
    />
    <router-view/>
    <div id="footer" class="footer">
      <div>
        <a-divider style="width:30vh"/>
        <a-typography-text><a href="https://github.com/Anvil-Dev">© Anvil-Dev</a></a-typography-text>
      </div>
    </div>
  </a-flex>
</template>

<style scoped lang="scss">
:root {
  --header-height: 0;
  --menu-width: 0;
}

.header {
  border: 1px solid rgb(235, 237, 240);
}

.menu {
  max-width: 280px;
  min-height: calc(100vh - var(--header-height));
}

.footer {
  display: block;
  align-items: center;
  margin-left: calc((100vw - var(--menu-width))/2);
  margin-bottom: 16px;
}
</style>