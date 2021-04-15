<template>
  <router-link v-bind:to="router" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {{msg}}
  </router-link>
</template>

<script>
export default {
  name: 'ButtonMsg',
  props: {
    msg: String,
    router: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

