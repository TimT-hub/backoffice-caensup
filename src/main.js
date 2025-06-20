//dans terminal en bas:--> npm run dev

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '../main.css';

import App from './App.vue';

import Dropdown from 'primevue/dropdown';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import InputField from './components/InputField.vue';
import TextareaField from './components/TextareaField.vue';
import MarkdownField from './components/MarkdownField.vue';
import LinkField from './components/LinkField.vue';
import UnknownField from './components/UnknownField.vue';
import HtmlCodePreview from './components/HtmlCodePreview.vue';

const app = createApp(App);

app.use(PrimeVue);

app.component('Dropdown', Dropdown);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);

app.component('input-field', InputField);
app.component('textarea-field', TextareaField);
app.component('markdown-field', MarkdownField);
app.component('link-field', LinkField);
app.component('unknown-field', UnknownField);
app.component('HtmlCodePreview', HtmlCodePreview);

app.mount('#app');
