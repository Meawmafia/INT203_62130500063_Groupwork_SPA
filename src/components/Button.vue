<template>
    <button class="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">
        {{msg}}
    </button>
</template>

<script>
export default{
    name: 'Button',
  props: {
    msg: String,
  }
}
</script>
