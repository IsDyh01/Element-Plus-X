<docs>
---
title: Enable HTML Tag Rendering
---

Supports HTML tag rendering, use the `allowHtml` property to enable it, enabled by default.
</docs>

<script setup lang="ts">
const markdown = `<div style="color: red;">This is an HTML tag test.</div>`;
const value1 = ref(true);
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <el-switch v-model="value1" />
    <XMarkdown :markdown="markdown" :allow-html="value1" />
  </div>
</template>

<style scoped lang="less"></style>
