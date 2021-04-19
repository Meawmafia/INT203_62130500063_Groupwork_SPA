<template>
  <div id="BG" :style="bgSize">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  props: {
    bgSize: {
      type: String,
    },
  },
};
</script>

<style scoped>
#BG {
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: auto;
}
body {
  height: 100%;
}
</style>