<script setup lang="ts">
import {UserFilled} from '@element-plus/icons-vue';
import Supporters from '@/assets/supporters.json';
import Authors from '@/assets/authors.json';
import Contributors from '@/assets/contributors.json';
import {createFromIconfontCN} from '@ant-design/icons-vue';

Supporters.sort((a, b) => b.money - a.money);

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4583291_sbz536mbo0k.js',
});
</script>

<template>
  <a v-for="author in Authors" :href="author.link" target="_blank">
    <a-badge-ribbon :text="author.work">
      <a-card class="main-card" hoverable bordered>
        <template #title>
          <a-avatar size="large" :src="author.avatar">
            <template #icon>
              <UserFilled/>
            </template>
          </a-avatar>
          {{ author.name }}
        </template>
        <template #extra>
          <a
              v-if="author.uid"
              :href="'https://space.bilibili.com/' + author.uid"
              target="_blank"
              style="margin-right: 80px;font-size: 32px">
            <icon-font class="icon" type="icon-bilibili"/>
          </a>
        </template>
        <p v-for="desc in author.desc">
          {{ desc }}
        </p>
        <p class="copy" v-if="author.copyright">
          ——引自
          <a :href="author.copyright.link" target="_blank">{{ author.copyright.name }}</a>
        </p>
      </a-card>
    </a-badge-ribbon>
  </a>

  <a-card class="main-card" hoverable bordered>
    <template #title>贡献者</template>
    <a v-for="contributor in Contributors" :href="contributor.link" target="_blank">
      <a-badge-ribbon :text="contributor.work" color="green">
        <a-card class="sub-card" hoverable bordered>
          <template #extra>
            <a
                v-if="contributor.uid"
                :href="'https://space.bilibili.com/' + contributor.uid"
                target="_blank"
                style="margin-right: 80px;font-size: 32px">
              <icon-font class="icon" type="icon-bilibili"/>
            </a>
          </template>
          <template #title>
            <a-avatar :src="contributor.avatar" size="large" style="margin: 5px">
              <template #icon>
                <UserFilled/>
              </template>
            </a-avatar>
            <a-typography-text style="font-size: 15px">
              {{ contributor.name }}
            </a-typography-text>
          </template>
        </a-card>
      </a-badge-ribbon>
    </a>
  </a-card>

  <a-card class="main-card" hoverable bordered>
    <template #title>赞助榜</template>
    <a v-for="supporter in Supporters" :href="supporter.link" target="_blank">
      <a-badge-ribbon text="实力富哥💵" color="pink">
        <a-card hoverable bordered class="sub-card">
          <template #title>
            <a-avatar :src="supporter.avatar" size="large" style="margin: 5px">
              <template #icon>
                <UserFilled/>
              </template>
            </a-avatar>
            <a-typography-text style="font-size: 15px">
              {{ supporter.name }}
            </a-typography-text>
          </template>
        </a-card>
      </a-badge-ribbon>
    </a>
  </a-card>
</template>

<style scoped>
.copy {
  text-align: right;
}

.main-card {
  margin: 5px;
}

.sub-card {
  margin: 5px;
}
</style>
