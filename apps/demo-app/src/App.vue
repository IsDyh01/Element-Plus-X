<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, Thinking } from 'vue-element-plus-x'
import { en, zhCn } from 'vue-element-plus-x/locale'
// import AboutTest from './views/AboutTest.vue'
import zhCnElementPlus  from 'element-plus/es/locale/lang/zh-cn'
import enElementPlus  from 'element-plus/es/locale/lang/en'

const senderValue = ref(false)
const locale = ref(zhCn)
const elecontext = ref({
  locale: zhCnElementPlus
})
function changeLocale() {
  locale.value = en
  elecontext.value.locale = enElementPlus
}

</script>

<template>
  <ConfigProvider :elx-locale="locale" :ele-config-context="elecontext">
    <!-- <AboutTest msg="123" /> -->
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
