<template>
  <div>
    <label class="block font-medium mb-1">{{ field.label }}</label>
    <div class="mb-2">
      <label :for="field.id + '_label'" class="text-sm font-medium">Label</label>
      <input :id="field.id + '_label'" type="text"
             class="w-full p-2 border rounded shadow-sm"
             :value="modelValue.label"
             @input="$emit('update:modelValue', { ...modelValue, label: $event.target.value })" />
    </div>
    <div>
      <label :for="field.id + '_url'" class="text-sm font-medium">URL</label>
      <input :id="field.id + '_url'" type="url"
             class="w-full p-2 border rounded shadow-sm"
             :value="modelValue.url"
             @input="$emit('update:modelValue', { ...modelValue, url: $event.target.value })" />
    </div>
  </div>
</template>

<script setup>
defineProps(['field', 'modelValue'])
defineEmits(['update:modelValue'])
</script>
