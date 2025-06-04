<template>
  <div class="container">
    <div class="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 class="text-3xl font-bold mb-8 text-center text-blue-700">Générateur de Fiche Formation</h1>
      <form @submit.prevent>
      <TabView v-model:activeIndex="activeTab">
        <TabPanel header="Partie principale">
          <template #default>
            <div v-for="field in config.main" :key="field.id" class="mb-6">
              
              <div class="flex items-center mb-2">
                <input
                  type="checkbox"
                  v-model="stockage.main[field.id].hidden"
                  class="mr-2"
                  :id="'hide_' + field.id"
                />
                <label :for="'hide_' + field.id" class="text-sm">Masquer ce champ</label>
              </div>

              <component v-if="!stockage.main[field.id].hidden"
                        :is="getComponent(field.type)"
                        :field="field"
                        :zone="'main'"
                        v-model="stockage.main[field.id].value"
                        />
            </div>
          </template>
        </TabPanel>

        <TabPanel header="Informations complémentaires">
          <template #default>
            <div v-for="field in config.aside" :key="field.id" class="mb-6">
              <div class="flex items-center mb-2">
                <input
                type="checkbox"
                v-model="stockage.aside[field.id].hidden"
                class="mr-2"
                :id="'hide_' + field.id"
                />
                <label :for="'hide_' + field.id" class="text-sm">Masquer ce champ</label>
              </div>
              <component v-if="!stockage.aside[field.id].hidden"
                        :is="getComponent(field.type)"
                        :field="field"
                        :zone="'aside'"
                        v-model="stockage.aside[field.id].value"
              />
            </div>
          </template>
        </TabPanel>
      </TabView>
      </form>
    </div>
  </div>
</template>

<script setup>

const activeTab = ref(0)
import { ref, reactive, watch } from 'vue'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import '@toast-ui/editor/dist/toastui-editor.css'
import config from './config/formConfig.js'

const stockage = reactive({ main: {}, aside: {} })
for (const zone in config) {
  config[zone].forEach(field => {
    stockage[zone][field.id] = { 
      value: field.default ?? "",
      hidden: false
      }
  })
}

function getComponent(type) {
  return {
    inputText: 'input-field',
    textarea: 'textarea-field',
    markdown: 'markdown-field',
    link: 'link-field'
  }[type] || 'unknown-field'
}
</script>
