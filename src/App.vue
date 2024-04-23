<script setup lang="ts">
import {h, reactive, ref, watch} from "vue";
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
</script>

<template>
  <a-layout>
    <a-page-header
        class="app-header"
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
    <a-layout>
      <a-layout-sider class="app-sider">
        <a-menu
            v-model:openKeys="state.openKeys"
            v-model:selectedKeys="state.selectedKeys"
            mode="inline"
            style="max-width: 280px;"
            :inline-collapsed="state.collapsed"
            :items="items"
        />
      </a-layout-sider>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>

</template>

<style scoped lang="scss">
$header-height: 10vh;

.app-header {
  border: 1px solid rgb(235, 237, 240);
  min-height: 10vh;
  --header-height: $header-height;
}

.app-sider {
  height: 100vh - $header-height;
}
</style>
