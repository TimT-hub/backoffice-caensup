<template>
  <div>
    <label :for="field.id" class="block font-medium mb-1">{{ field.label }}</label>
    <input type="text" :id="field.id"
           class="w-full p-2 border rounded shadow-sm"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script setup>
defineProps(['field', 'modelValue'])
defineEmits(['update:modelValue'])
</script>
