<script setup lang="ts">
const qrcodes = [
  {
    value: "https://qr.alipay.com/fkx189991xm3pdujnw1mxb0"
  },
  {
    value: "wxp://f2f0-fpSqA1Q3ig3rSGlxpZzq5HfND8n5JYnqJK1ecp29scXBlRx2gKE_9JLIaJL4_Di"
  }
]
</script>

<template>
  <div class="qrcode" v-for="qrcode in qrcodes">
    <a-card hoverable class="card">
      <a-qrcode :value="qrcode.value"/>
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
</style>