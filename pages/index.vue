<template>
  <div>
    <h1>Index</h1>

    <nuxt-link :to="url">Multiple Words with Spaces and Quotes</nuxt-link>
  </div>
</template>

<script lang="ts" setup>
  import { normalizeURL } from 'ufo'

  const phrase = '"Two Words"'
  const url = normalizeURL(`/search?s=${phrase}`)
</script>
