<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

const pushFormLink = async (event: Event) => {
  event.preventDefault()
  await router.push({path: '/form'})
}
</script>

<template>
  <h1>Hello World</h1>
  <a @click="pushFormLink">Form</a>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
