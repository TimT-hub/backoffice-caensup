<template>
  <div>
    <label :for="field.id" class="block font-medium mb-1">{{ field.label }}</label>
    <textarea :id="field.id"
              class="w-full p-2 border rounded shadow-sm h-28 resize-y"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)">
    </textarea>
  </div>
</template>

<script setup>
defineProps(['field', 'modelValue'])
defineEmits(['update:modelValue'])
</script>
