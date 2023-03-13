<template>
  <div>
    <h1>Click the link, then refresh the website</h1>

    <ol>
      <li><nuxt-link :to="`/search?s=${phrase1}`">{{`/search?s=${phrase1}` }}</nuxt-link></li>
      <li><nuxt-link :to="`/search?s=${phrase2}`">{{ `/search?s=${phrase2}` }}</nuxt-link></li>
      <li><nuxt-link :to="`/search?s=${phrase3}`">{{ `/search?s=${phrase3}` }}</nuxt-link></li>
      <li><nuxt-link to="/one+two">/one+two (<code>~/pages/one two.vue</code>)</nuxt-link></li>
      <li><nuxt-link to="/three+four">/three+four (<code>~/pages/three+four.vue</code>)</nuxt-link></li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
  const phrase1 = 'Single'
  const phrase2 = '"Two Words"'
  const phrase3 = 'one+two'
</script>
