import type { Options } from 'markdown-it';
import type { ConfigProviderProps } from './types';
import MarkdownIt from 'markdown-it';
import { zhCn } from '../../locale';

export const APP_CONFIG_PROVIDE_KEY = Symbol('vue-element-plus-x-config');

export const DEFAULT_MD_CONFIG: Options = {
  html: true,
  linkify: true,
  typographer: true,
  breaks: true
};

export const DEFAULT_APP_CONFIG: ConfigProviderProps = {
  mdPlugins: [],
  md: new MarkdownIt(DEFAULT_MD_CONFIG),
};
