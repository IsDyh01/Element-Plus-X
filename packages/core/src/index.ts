import type { App, Plugin } from 'vue';
import type { ElxConfigProviderProps } from './components/ConfigProvider/types';
import ElementPlus from 'element-plus';
import Attachments from './components/Attachments/index.vue';
import Bubble from './components/Bubble/index.vue';
import BubbleList from './components/BubbleList/index.vue';
import { APP_CONFIG_PROVIDE_KEY } from './components/ConfigProvider/constants';
import { useProvideGlobalConfig } from './components/ConfigProvider/hooks/useProvideGlobalConfig';
import ConfigProvider from './components/ConfigProvider/index.vue';
import Conversations from './components/Conversations/index.vue';
import EditorSender from './components/EditorSender/index.vue';
import FilesCard from './components/FilesCard/index.vue';
import GlobalConfigProvider from './components/GlobalConfigProvider/index.vue';
import MentionSender from './components/MentionSender/index.vue';
import Prompts from './components/Prompts/index.vue';
import Sender from './components/Sender/index.vue';
import Thinking from './components/Thinking/index.vue';
import ThoughtChain from './components/ThoughtChain/index.vue';
import Typewriter from './components/Typewriter/index.vue';
import Welcome from './components/Welcome/index.vue';
import XMarkdown from './components/XMarkdown/index.vue';
import XMarkdownAsync from './components/XMarkdownAsync/index.vue';

export * from './components';
export * from './hooks';

const ElementPlusX: Plugin<ElxConfigProviderProps> = {
  install(app: App, options: ElxConfigProviderProps) {
    if (options) {
      useProvideGlobalConfig(options);
    }
    if (options && options.eleConfigContext) {
      app.use(ElementPlus, options.eleConfigContext);
    }
    app.component('Attachments', Attachments);
    app.component('Bubble', Bubble);
    app.component('BubbleList', BubbleList);
    app.component('ConfigProvider', ConfigProvider);
    app.component('Conversations', Conversations);
    app.component('EditorSender', EditorSender);
    app.component('FilesCard', FilesCard);
    app.component('GlobalConfigProvider', GlobalConfigProvider);
    app.component('MentionSender', MentionSender);
    app.component('Prompts', Prompts);
    app.component('Sender', Sender);
    app.component('Thinking', Thinking);
    app.component('ThoughtChain', ThoughtChain);
    app.component('Typewriter', Typewriter);
    app.component('Welcome', Welcome);
    app.component('XMarkdown', XMarkdown);
    app.component('XMarkdownAsync', XMarkdownAsync);
  }
};

export default ElementPlusX;
