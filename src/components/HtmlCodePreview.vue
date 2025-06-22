<script setup>
import { computed } from 'vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

const props = defineProps({
  title: String,
  code: String
});


const wrapper = (html) => `
<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>Preview CaenSup Sainte-Ursule</title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Muli:wght@300;400;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://www.caensup.fr/web/css/stylebase.css"/>
    <link rel="stylesheet" href="https://www.caensup.fr/web/css/layout.css" />
    <link rel="stylesheet" href="https://www.caensup.fr/web/css/style_dynamique.php" />
    <link rel="stylesheet" media="screen and (max-width: 570px)" href="https://www.caensup.fr/web/css/small_screen.css" />
    <link rel="stylesheet" href="/public/css/style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <div class='formation-description netc-editor'>
        ${html}
    </div>
  </body>
</html>
`;

const sanitizedCode = computed(() => props.code ?? '');
</script>

<template>
  <h2 class="text-xl font-semibold mb-2">
    {{ title }}
  </h2>
  <TabView>
    <TabPanel header="HTML">
      <textarea
          :value="sanitizedCode"
          class="prose max-w-none w-full p-2 border rounded"
          rows="10"
          disabled
      ></textarea>
    </TabPanel>
    <TabPanel header="Preview">
      <div class="p-4">
        <iframe
            class="w-full h-96 border rounded shadow-sm p-4"
            :srcdoc=wrapper(sanitizedCode)
        ></iframe>
      </div>
    </TabPanel>
  </TabView>
</template>
