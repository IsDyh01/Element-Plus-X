import type { LocaleObject } from '../components/GlobalConfigProvider/types';
import { APP_ELX_LOCALE_PROVIDE_KEY } from '@components/ConfigProvider/constants';
import { createI18n } from 'vue-i18n';

function useLocal() {
  const providerLocale = inject<
    ComputedRef<LocaleObject | undefined> | LocaleObject
  >(APP_ELX_LOCALE_PROVIDE_KEY);

  const locale_name = computed(() => {
    if (isReactive(providerLocale)) {
      return (providerLocale?.value as LocaleObject)?.name;
    }
    return (providerLocale as LocaleObject)?.name;
  });

  const locale_code = computed(() => {
    if (isReactive(providerLocale)) {
      return (providerLocale?.value as LocaleObject)?.elx;
    }
    return (providerLocale as LocaleObject)?.elx;
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
