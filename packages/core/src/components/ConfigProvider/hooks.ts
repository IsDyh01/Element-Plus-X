import type { ConfigProviderProps } from './types';
import {
  APP_CONFIG_PROVIDE_KEY,
  APP_ELX_LOCALE_PROVIDE_KEY,
  DEFAULT_APP_CONFIG
} from './constants';

export function useConfigProvider() {
  return inject(APP_CONFIG_PROVIDE_KEY, DEFAULT_APP_CONFIG);
}

export function useProvideGlobalConfig(
  config: ComputedRef<ConfigProviderProps>
) {
  const ctg = computed(() => {
    return config.value;
  });

  provide(APP_CONFIG_PROVIDE_KEY, ctg);

  provide(
    APP_ELX_LOCALE_PROVIDE_KEY,
    computed(() => ctg.value.elxLocale)
  );
}
