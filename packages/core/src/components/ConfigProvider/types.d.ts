import type { ConfigProviderContext } from 'element-plus';
import type MarkdownIt from 'markdown-it';

export type LocaleObject = Record<string, any>;
export type MarkdownItPlugin = (md: MarkdownIt) => void;

export interface ElxConfigProviderProps {
  mdPlugins?: MarkdownItPlugin[];
  md?: MarkdownIt;
  elxLocale?: LocaleObject; // elx的国际化配置与element-plus进行区分
  eleConfigContext?: ConfigProviderContext;
  // highlight?: (code: string, language: string) => string;
}
