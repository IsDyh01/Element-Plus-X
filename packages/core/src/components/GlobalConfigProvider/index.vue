<script setup lang="ts">
import type { GlobalConfigProviderProps, LocaleObject } from './types';
import { GLOBAL_CONFIG_PROVIDE_KEY, GLOBAL_LOCALE_KEY } from './constants';

const props = withDefaults(defineProps<GlobalConfigProviderProps>(), {});

const locale = computed(() => {
  return props.locale;
});

const elementPlusContext = computed(() => {
  return props.elementPlusContext;
});

console.log(elementPlusContext.value, '-------');

provide<ComputedRef<LocaleObject | undefined>>(GLOBAL_LOCALE_KEY, locale);
provide<GlobalConfigProviderProps>(GLOBAL_CONFIG_PROVIDE_KEY, props);
</script>

<template>
  <el-config-provider v-bind="elementPlusContext">
    <slot />
  </el-config-provider>
</template>
