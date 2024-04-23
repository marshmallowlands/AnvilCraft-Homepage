<script setup lang="ts">
import {UserFilled} from "@element-plus/icons-vue";
import {ref} from "vue";

const infos = ref([
  {
    name: "XeKr",
    avatar: "https://avatars.githubusercontent.com/u/45423407",
    desc: [
      "建筑学在读博士，TIS成员，游戏方面主要擅长各类建筑。有一段时间经常在视频、直播乃至别人的直播中推销自制的方纹系列纹理包（原方纹淡彩、方纹中古等）以及红石显示纹理包，因而凡有主播使用这些纹理包都会有人戏称“XK打钱”（“广告费”）。在TIS服务器陷入风波时依然不忘推销纹理包，堪称Minecraft up主中的东京电视台。",
      "红石方面也有不少建树，不仅能做出机器还能把机器装修得外观优美。其制作的红石显示纹理包使用方便，设计科学，已经成为Minecraft红石类视频中较为常见的纹理包。制作过24合一的超级工厂、炼药机等红石机器，以及没什么用但是很有趣的沙雕红石系列"
    ],
    copyright: {
      name: "萌娘百科",
      link: "https://zh.moegirl.org.cn/XeKr"
    }
  },
  {
    name: "古镇天Gugle",
    avatar: "https://avatars.githubusercontent.com/u/34372427",
    desc: [
      "菜狗"
    ]
  }
]);

</script>

<template>
  <a-card class="card" hoverable bordered v-for="info in infos">
    <a-card>
      <template #title>
        <a-avatar size="large" style="background: #000">
          <template #icon>
            <a-image :src="info.avatar"/>
          </template>
        </a-avatar>
        {{ info.name }}
      </template>
      <p v-for="desc in info.desc">
        {{ desc }}
      </p>
      <p class="copy" v-if="info.copyright">——引自<a :href="info.copyright.link">{{ info.copyright.name }}</a></p>
    </a-card>
  </a-card>
</template>

<style scoped>
.copy {
  text-align: right;
}

.card {
  margin: 5px;
}
</style>