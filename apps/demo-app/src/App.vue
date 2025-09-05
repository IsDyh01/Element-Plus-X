<script setup lang="ts">
import { ref } from 'vue';
import { Thinking, GlobalConfigProvider } from 'vue-element-plus-x'; 
import { zhCn, en } from 'vue-element-plus-x/locale';
import zhCnElementPlus from 'element-plus/es/locale/lang/zh-cn';

const senderValue = ref(false);
const locale = ref(zhCn);
const changeLocale = () => {
  locale.value  = en;
}

</script>

<template>
   <GlobalConfigProvider :locale="locale" :element-plus-context="{ locale: zhCnElementPlus }">
    <el-button @click="changeLocale">切换</el-button>
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
      <Thinking
        v-model="senderValue"
        content="欢迎使用 Element-Plus-X"
        status="start"
      />
    </div>

    <div>
      <Thinking
        v-model="senderValue"
        content="欢迎使用 Element-Plus-X"
        status="thinking"
      />
    </div>

    <div>
      <Thinking
        v-model="senderValue"
        content="欢迎使用 Element-Plus-X"
        status="end"
      />
    </div>

    <div>
      <Thinking
        v-model="senderValue"
        content="欢迎使用 Element-Plus-X"
        status="error"
      />
    </div>
  </div>
  <el-button>1123</el-button>
  <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
</GlobalConfigProvider>
  
</template>

<style scoped>

</style>
