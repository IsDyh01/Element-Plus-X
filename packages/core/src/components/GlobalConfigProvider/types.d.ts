import type { ConfigProviderContext } from 'element-plus';

type LocaleObject = Record<string, any>;

export interface GlobalConfigProviderProps {
  locale?: LocaleObject;
  elementPlusContext?: ConfigProviderContext;
}
