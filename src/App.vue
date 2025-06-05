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
        <!--Bouton d'ajout dans le template-->
        <button @click="afficherHTML" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Générer le HTML</button>

        <div v-if="htmlGenere" class="mt-8 p-4 border rounded bg-gray-50">
          <h2 class="text-xl font-semibold mb-2">Aperçu HTML généré :</h2>
          <textarea v-model="htmlGenere" class="prose max-w-none" rows="10" disabled></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>




const activeTab = ref(0)
import Editor from '@toast-ui/editor';
import { ref, reactive, watch } from 'vue'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import '@toast-ui/editor/dist/toastui-editor.css'
import config from './config/formConfig.js'

const stockage = reactive({ main: {}, aside: {} });

const converter = {
  editor: null,
  init() {
    const div = document.createElement('div');
    div.style.display = 'none';
    document.body.appendChild(div);
    this.editor = new Editor({
      el: div,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '0px',
    });
  },
  toHTML(markdown) {
    this.editor.setMarkdown(markdown);
    return this.editor.getHTML();
  },
};

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

// crée bloc HTML contenant champs 
function genererHTML(zConfig,zData) {

  converter.init();
  let html = '';
  for (const field of zConfig) {
    //recupere les données associés via l'ID
    const data = zData[field.id]
    //si le champ est visible et a une valeur on l'affiche
    if (!data.hidden && data.value) {
      //on appele fonction genererChampHTML() pour obtenir le HTML du champ
      html += genererChampHTML(field, data.value)
    }
  }
  return html
}

// fonction qui retourne un HTML généré pour chaque champ en fonction du type
function genererChampHTML(field, value) {
  //Condition 'switch' qui permet d'apater le format HTML en fonction du type
  switch (field.type) {
    case 'inputText':
      //pour inputText, un paragraphe simple, value est le texte saisi par l'utilisateur
      return `<p><strong>${field.label} :</strong> ${value}</p>`
    case 'textarea':
      //pour textarea, un paragraphe avec des retours à la ligne où \n est remplacé par la balise de retour  à la ligne <br>
      return `<p><strong>${field.label} :</strong><br>${value.replace(/\n/g, '<br>')}</p>`
    case 'markdown':
      // il faut parser le markdown
      return converter.toHTML(value);
    case 'link':
      // un paragraphe où ést crée un lien cliquable
      return `<p><strong>${field.label} :</strong> <a href="${value}" target="_blank">${value}</a></p>`
    default:
      //Cas par défaut si le type est inconnu, suis le contenu de la boucle pour le type des champs
      return `<p><strong>${field.label} :</strong> ${value}</p>`
  }
}

//  pour stocker le HTML généré
const htmlGenere = ref('')

// Fonction pour afficher ce HTML dans la page
function afficherHTML() {
  if(activeTab.value===1) {
    htmlGenere.value = genererHTML(config.aside, stockage.aside)
  } else {
    htmlGenere.value = genererHTML(config.main, stockage.main)
  }
}
</script>
