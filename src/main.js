//dans terminal en bas:--> npm run dev

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Dropdown from 'primevue/dropdown'

import App from './App.vue'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '../main.css'

const app = createApp(App)

app.use(PrimeVue)
app.component('Dropdown', Dropdown)

app.mount('#app')


import InputField from './components/InputField.vue'
import TextareaField from './components/TextareaField.vue'
import MarkdownField from './components/MarkdownField.vue'
import LinkField from './components/LinkField.vue'
import UnknownField from './components/UnknownField.vue'

app.component('input-field', InputField)
app.component('textarea-field', TextareaField)
app.component('markdown-field', MarkdownField)
app.component('link-field', LinkField)
app.component('unknown-field', UnknownField)


import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'

app.component('TabView', TabView)
app.component('TabPanel', TabPanel)

//pour parser pour le type markdown pour le generateur HTML
import DOMPurify from 'dompurify'