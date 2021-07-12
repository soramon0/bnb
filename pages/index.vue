<template>
  <div class="flex justify-between">
    <nuxt-link
      v-for="home in homes"
      :key="home.objectID"
      :to="`/home/${home.objectID}`"
    >
      <home-card :home="home" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import homes from '~/data/homes.json'

export default Vue.extend({
  data() {
    return {
      homes: homes.slice(0, 3),
    }
  },
  head() {
    return {
      title: 'Homepage',
    }
  },
})
</script>
