<template>
  <Background
    :style="cssProps"
    bgSize="background-size: cover"
    class="bg-none w-screen px-32 pt-16 pb-48"
  >
    <div class="flex justify-center">
      <div class="flex flex-col">
        <b>{{ pokeName }}</b>
        <img :src="pokeImg" id="pokemon" />
      </div>
    </div>
    <ButtonRouter
      msg="Catch it!"
      router="/Profile"
      @click="submit"
      class="mr-10"
    ></ButtonRouter>
    <Button msg="Reroll" @click="getPoke"></Button>
  </Background>
</template>
<script>
import ButtonRouter from "@/components/ButtonRouter.vue";
import Button from "@/components/Button.vue";
import Background from "@/components/Background.vue";
export default {
  components: {
    ButtonRouter,
    Button,
    Background,
  },
  data() {
    return {
      pokeName: "",
      pokeImg: "",
      pokeSpecies: [],
      pokeStats: {},
      cssProps: {
        backgroundImage: `url(${require("@/assets/pokeBG.png")})`,
      },
    };
  },
  mounted() {
    this.getPoke();
  },
  created() {},
  methods: {
    submit() {
      let pokemon = {
        pokeName: this.pokeName,
        pokeImg: this.pokeImg,
        pokeSpecies: this.pokeSpecies,
        pokeStats: this.pokeStats,
      };
      console.log(pokemon);
      this.axios
        .post(`http://localhost:3000/pokemon`, pokemon)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => alert(err));
    },
    getPoke() {
      let ranPoke = Math.floor(Math.random() * 1000);

      this.axios
        .get("https://pokeapi.co/api/v2/pokemon/" + ranPoke)
        .then((response) => {
          this.pokeName = response.data.forms[0].name;

          this.pokeImg = response.data.sprites.front_default;

          this.axios
            .get(response.data.species.url)
            .then((response) => {
              let speciesLength = response.data.egg_groups.length;
              if (speciesLength > 1) {
                for (let x = 0; x < speciesLength; x++) {
                  this.pokeSpecies.push(response.data.egg_groups[x].name);
                }
              } else {
                this.pokeSpecies.push(response.data.egg_groups[0].name);
              }
            })
            .catch((err) => alert(err));

          let arrStat = [];
          for (let x = 0; x < 5; x++) {
            arrStat.push([
              response.data.stats[x].stat.name,
              response.data.stats[x].base_stat,
            ]);
          }
          this.pokeStats = Object.fromEntries(arrStat);
        })
        .catch((err) => alert(err));
    },
  },
};
</script>
<style>
#pokemon {
  width: 15rem;
  height: 15rem;
}
</style>