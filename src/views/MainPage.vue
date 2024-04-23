<script setup lang="ts">
import { ref } from 'vue';

const height = ref(100);
</script>

<template>
  <a-slider v-model:value="height" :max="2000" />
  <div :style="{ height: height + 'px', background: 'red' }"></div>
</template>

<style scoped></style>
