<template>
  <div>
    <img :src="home.images[0]" class="w-64" />
    <h1>{{ home.title }}</h1>
    {{ home.location.address }} {{ home.location.city }} {{ home.location.state
    }}<br />
    {{ home.guests }} guests <br />
    {{ home.pricePerNight }} / night <br />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    home: {
      type: Object,
      required: true,
    },
  },
}
</script>
