<script setup lang="ts">
import type { ConfigProviderProps } from './types';
import { DEFAULT_APP_CONFIG } from './constants';
import { useProvideGlobalConfig } from './hooks';

const props = withDefaults(defineProps<ConfigProviderProps>(), {});

const config = computed<ConfigProviderProps>(() => {
  return {
    md: props.md ?? DEFAULT_APP_CONFIG.md,
    mdPlugins: props.mdPlugins ?? DEFAULT_APP_CONFIG.mdPlugins,
    elxLocale: props.elxLocale ?? DEFAULT_APP_CONFIG.elxLocale
  };
});
useProvideGlobalConfig(config);
</script>

<template>
  <slot />
</template>

<style scoped lang="scss" src="./style.scss"></style>
