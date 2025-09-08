import type { ElxConfigProviderProps } from '../types';
import { APP_CONFIG_PROVIDE_KEY, APP_ELX_LOCALE_PROVIDE_KEY } from '../constants';

export function useProvideGlobalConfig(
  config: MaybeRef<ElxConfigProviderProps>
) {
  const ctg = computed(() => {
    return unref(config);
  });

  provide(APP_CONFIG_PROVIDE_KEY, ctg);

  provide(
    APP_ELX_LOCALE_PROVIDE_KEY,
    computed(() => ctg.value.elxLocale)
  );
}
