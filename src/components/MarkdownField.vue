<template>
  <div>
    <label :for="field.id" class="block font-medium mb-1">{{ field.label }}</label>
    <div :id="'editor-' + field.id"></div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import Editor from '@toast-ui/editor'

const props = defineProps(['field', 'modelValue'])
const emit = defineEmits(['update:modelValue'])

let editorInstance

onMounted(() => {
  editorInstance = new Editor({
    el: document.getElementById('editor-' + props.field.id),
    initialEditType: 'markdown',
    initialValue: props.modelValue,
    events: {
      change: () => {
        emit('update:modelValue', editorInstance.getMarkdown())
      }
    }
  })
})

watch(() => props.modelValue, (newVal) => {
  if (editorInstance && editorInstance.getMarkdown() !== newVal) {
    editorInstance.setMarkdown(newVal)
  }
})
</script>
