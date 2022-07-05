<script setup lang="ts">
import {useRouter} from "vue-router";
import {computed, ref} from "vue";

const router = useRouter()

const inputValue = ref('')
const computedValue = computed({
  get() {
    return inputValue.value;
  },
  set(value: string) {
    inputValue.value = value;
  },
});

const handleSubmit = async () => {
  if (inputValue.value === '') return

  await router.push({path: '/'})
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="computedValue"
      type="text"
      name="text"
    >
    <input
      type="submit"
      value="submit"
    >
  </form>
</template>