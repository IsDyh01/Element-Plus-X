<script setup lang="ts">
import type { ElxConfigProviderProps } from './types';
import { DEFAULT_APP_CONFIG } from './constants';
import { useProvideGlobalConfig } from './hooks/useProvideGlobalConfig';

const props = withDefaults(defineProps<ElxConfigProviderProps>(), {});
console.log(props, 'props');

const config = computed<ElxConfigProviderProps>(() => {
  return {
    md: props.md ?? DEFAULT_APP_CONFIG.md,
    mdPlugins: props.mdPlugins ?? DEFAULT_APP_CONFIG.mdPlugins,
    elxLocale: props.elxLocale ?? DEFAULT_APP_CONFIG.elxLocale,
    eleConfigContext: props.eleConfigContext
  };
});
useProvideGlobalConfig(config);
</script>

<template>
  <el-config-provider v-bind="config.eleConfigContext">
    <slot />
  </el-config-provider>
</template>

<style scoped lang="scss" src="./style.scss"></style>
