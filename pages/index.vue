<template>
  <div>
    <h1>Click the link, then refresh the website</h1>

    <nuxt-link :to="`/search?s=${phrase1}`">Single Word</nuxt-link>
    <nuxt-link :to="`/search?s=${phrase2}`">Multiple Words with Spaces and Quotes</nuxt-link>
    <nuxt-link :to="`/search?s=${phrase3}`">Phrase with `+` char</nuxt-link>
  </div>
</template>

<script lang="ts" setup>
  const phrase1 = 'Single'
  const phrase2 = '"Two Words"'
  const phrase3 = 'one+two'
</script>
