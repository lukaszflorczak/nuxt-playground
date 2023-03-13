<template>
  <div>
    <h1>Index</h1>

    <nuxt-link :to="`/search?s=${phrase}`" >{{ phrase }}</nuxt-link>
  </div>
</template>

<script lang="ts" setup>
  const phrase = '"Multiple Words with Spaces and Quotes"'
</script>
