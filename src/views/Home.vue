<template>
  <Background :style="cssProps" bgSize="background-size: cover;">
    <div class="max-w-md mx-auto">
      <h1 class="font-bold text-2xl py-14">Welcome to poke-buddy</h1>
      <div class="flex justify-center text-left text-sm whitespace-nowrap">
        <span
          class="mr-48 text-xs font-semibold inline-block py-5 px-2 rounded-full text-red-600 bg-red-200 uppercase last:mr-0"
          >if you wannt to find your buddy. please click <b>"Cacth"</b> on
          navigation bar</span
        >
        <span
          class="text-xs font-semibold inline-block py-5 px-2 rounded-full text-indigo-600 bg-indigo-200 uppercase last:mr-0"
          >if you wannt to see your buddy. please click <b>"Profile"</b> on
          navigation bar</span
        >
      </div>
      <div class="flex justify-center">
        <img src="@/assets/doctor.png" alt="doctor" id="doctor" class="pb-10" />
      </div>
    </div>
  </Background>
</template>
<script>
import Background from "@/components/Background.vue";

export default {
  components: {
    Background,
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/pokeHome.png")})`,
      },
    };
  },
};
</script>
<style scoped>
#doctor {
  width: 14rem;
  height: 27rem;
}
</style>
