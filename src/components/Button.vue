<template>
    <button @click="edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {{msg}}
    </button>
</template>

<script>
export default{
    name: 'Button',
  props: {
    msg: String,
  },

}
</script>
