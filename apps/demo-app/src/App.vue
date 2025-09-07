<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, Thinking } from 'vue-element-plus-x'
import { en, zhCn } from 'vue-element-plus-x/locale'

const senderValue = ref(false)
const locale = ref(zhCn)
function changeLocale() {
  locale.value = en
}
</script>

<template>
  <ConfigProvider :elx-locale="locale">
    <el-button @click="changeLocale"> 切换 </el-button>
    <div
      style="
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      "
    >
      <div>
        <Thinking v-model="senderValue" content="欢迎使用 Element-Plus-X" status="start" />
      </div>

      <div>
        <Thinking v-model="senderValue" content="欢迎使用 Element-Plus-X" status="thinking" />
      </div>

      <div>
        <Thinking v-model="senderValue" content="欢迎使用 Element-Plus-X" status="end" />
      </div>

      <div>
        <Thinking v-model="senderValue" content="欢迎使用 Element-Plus-X" status="error" />
      </div>
    </div>
    <el-button>1123</el-button>
    <el-table mb-1 :data="[]" />
    <el-pagination :total="100" />
  </ConfigProvider>
</template>

<style scoped></style>
