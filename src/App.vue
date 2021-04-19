<template>
  <div id="nav" class="px-2 py-3 bg-blue-500 flex justify-center">
    <div class="text-xl font-bold leading-relaxed inline-block mr-20 py-2 whitespace-nowrap uppercase text-white hover:opacity-75">
      <router-link to="/Profile">Profile</router-link>
    </div>
    <div class="text-xl font-bold leading-relaxed inline-block mr-20 py-2 whitespace-nowrap uppercase text-white hover:opacity-75">
      <router-link to="/">Home</router-link>
    </div>
    <div class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:opacity-75">
      <router-link to="/Buddy">Catch</router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
