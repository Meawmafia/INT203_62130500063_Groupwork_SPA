<template>
  <div class="flex justify-center">
    <div class="flex flex-row">
      <h2>{{ this.pokeName }}</h2>
      <img :src="pokeImg" id="pokemon" />
    </div>
  </div>
  <Button msg="Add profile" router="/Add" @click="submit"></Button>

  <img alt="doctor" id="doctor" class="absolute" src="../assets/doctor.png" />
</template>
<script>
import Button from "@/components/Button.vue";
export default {
  name: "ButtonMsg",
  components: {
    Button,
  },
  data() {
    return {
      pokeName: "",
      pokeImg: "",
      pokeSpecies: [],
    };
  },
  created() {
    // let ranPoke = Math.floor(Math.random() * 1000);
    this.axios
      .get("https://pokeapi.co/api/v2/pokemon/" + 1)
      .then((response) => {
        this.pokeName = response.data.forms[0].name;
        this.pokeImg = response.data.sprites.front_default;

        this.axios.get(response.data.species.url).then((response) => {
         
          let speciesLength = response.data.egg_groups.length;
          if (speciesLength > 1) {
            for (let x = 0; x < speciesLength; x++) {
              this.pokeSpecies.push(response.data.egg_groups[x].name)
              console.log(response.data.egg_groups[x].name);
              console.log(this.pokeSpecies);
            }
          } else {
            this.pokeSpecies.push(response.data.egg_groups[0].name)
            console.log(response.data.egg_groups[0].name);
            console.log(this.pokeSpecies);

          }
        });
        
        console.log(response.data.forms[0].name);
        console.log(response.data.sprites.front_default);
        // console.log(response.data.species.url);
      });
  },
  methods: {
    submit() {
      let pokemon = { pokeName: this.pokeName, pokeImg: this.pokeImg };
      console.log(pokemon);
      this.axios
        .post(`http://localhost:3000/pokemon`, pokemon)
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>
<style>
#doctor {
  width: 20rem;
  height: 30rem;
}
#pokemon {
  width: 15rem;
  height: 15rem;
}
</style>