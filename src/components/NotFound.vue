<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

const pushPreviousLink = async (event: Event) => {
  event.preventDefault()
  await router.push({path: '/'})
}
</script>

<template>
  <h1>Not Found</h1>
  <a
    href="/"
    @click="pushPreviousLink"
  >戻る</a>
</template>