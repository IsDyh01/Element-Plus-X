import type { LocaleObject } from '../components/GlobalConfigProvider/types';
import { createI18n } from 'vue-i18n';
import { APP_ELX_LOCALE_PROVIDE_KEY, DEFAULT_APP_CONFIG } from '../components/ConfigProvider/constants';

function useLocal() {
  const providerLocale = inject<
    ComputedRef<LocaleObject>
  >(APP_ELX_LOCALE_PROVIDE_KEY, computed(() => DEFAULT_APP_CONFIG.elxLocale!));

  const locale_name = computed(() => {
    return providerLocale.value.name;
  });

  const locale_code = computed(() => {
    return providerLocale.value.elx;
  });

  const i18n = computed(() => {
    return createI18n({
      locale: locale_name.value,
      messages: {
        [locale_name.value]: locale_code.value
      }
    });
  });

  const t = computed(() => {
    return i18n.value.global.t;
  });

  const locale = computed(() => {
    return i18n.value.global.locale;
  });

  return {
    t,
    locale
  };
}

export default useLocal;
