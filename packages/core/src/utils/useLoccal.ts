import type { LocaleObject } from '../components/GlobalConfigProvider/types';
import { createI18n } from 'vue-i18n';
import { GLOBAL_LOCALE_KEY } from '../components/GlobalConfigProvider/constants';
import { en, zhCn } from '../locale';

function useLocal() {
  const defaultLocal = en;
  const providerLocale = inject<ComputedRef<LocaleObject | undefined> | LocaleObject>(GLOBAL_LOCALE_KEY, defaultLocal);

  const locale_name = computed(() => {
    if (isRef(providerLocale)) {
      return (providerLocale.value as LocaleObject)?.name ?? defaultLocal.name;
    }
    return (providerLocale as LocaleObject)?.name ?? defaultLocal.name;
  });

  const locale_code = computed(() => {
    if (isRef(providerLocale)) {
      return (providerLocale.value as LocaleObject)?.elx ?? defaultLocal.elx;
    }
    return (providerLocale as LocaleObject)?.elx ?? defaultLocal.elx;
  });

  const i18n = computed(() => {
    return createI18n({
      locale: locale_name.value,
      messages: {
        [locale_name.value]: locale_code.value || defaultLocal.elx,
      },
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
