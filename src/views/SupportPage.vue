<script setup lang="ts">
const qrcodes = [
  {
    name: '支付宝',
    value: 'https://qr.alipay.com/fkx189991xm3pdujnw1mxb0'
  },
  {
    name: '微信',
    value: 'wxp://f2f0-fpSqA1Q3ig3rSGlxpZzq5HfND8n5JYnqJK1ecp29scXBlRx2gKE_9JLIaJL4_Di'
  }
];
</script>

<template>
  <div class="qrcode" v-for="qrcode in qrcodes">
    <a-card hoverable bordered class="qr-code-card">
      <template #title>
        <a-typography-text style="font-size: 50px">
          {{ qrcode.name }}
        </a-typography-text>
        <br />
        <a-typography-text style="color: darkgray">请备注称呼、游戏ID和B站UID</a-typography-text>
      </template>
      <a-qrcode size="300" :value="qrcode.value" />
    </a-card>
  </div>
</template>

<style scoped>
.qrcode {
  display: inline-block;
  width: 48%;
  margin: 5px;
  text-align: center;
}

.qr-code-card {
  display: inline-block;
}
</style>
