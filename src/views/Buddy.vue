<template>
  <div class="flex justify-start">
    <div class="flex flex-col text-left">
      <h2>Name: {{ this.pokeName }}</h2>
      <div :v-for="pokeSpecies">Species: {{ pokeSpecies }}</div>
      <div>
        {{pokeStats}}
      </div>
    </div>

    <img :src="pokeImg" id="pokemon" />
    <img alt="doctor" id="doctor" class="" src="../assets/doctor.png" />
  </div>
  <Button msg="Add profile" router="/Add" @click="submit"></Button>
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
      pokeStats: {},
      
    
    };
  },
  created() {
    let ranPoke = Math.floor(Math.random() * 1000);
    // let statsPoke = { hp: 0, atk: 0, def: 0, specialAtk: 0, specialDef: 0, spd: 0 }
      
    this.axios
      .get("https://pokeapi.co/api/v2/pokemon/" + ranPoke)
      .then((response) => {
        this.pokeName = response.data.forms[0].name;
     
        this.pokeImg = response.data.sprites.front_default;
            
        
        this.axios.get(response.data.species.url).then((response) => {
          let speciesLength = response.data.egg_groups.length;
          if (speciesLength > 1) {
            for (let x = 0; x < speciesLength; x++) {
              this.pokeSpecies.push(response.data.egg_groups[x].name);
              // console.log(response.data.egg_groups[x].name);
              // console.log(this.pokeSpecies);
            }
          } else {
            this.pokeSpecies.push(response.data.egg_groups[0].name);
            // console.log(response.data.egg_groups[0].name);
            // console.log(this.pokeSpecies);
          }
        });

        let arrStat = []
        for (let x = 0; x < 5; x++) {
        arrStat.push([response.data.stats[x].stat.name,response.data.stats[x].base_stat])
        }
         this.pokeStats = Object.fromEntries(arrStat)
           console.log(this.pokeStats);
        // console.log(arrStat);
        // Object.assign(this.pokeStats,arrStat)
        //   console.log(this.pokeStats)
        //   console.log(response.data.stats[0].base_stat);
        // // console.log(response.data.forms[0].name);
        // console.log(response.data.sprites.front_default);
        // console.log(response.data.species.url);
      });
  },
  methods: {
    submit() {
      let pokemon = {
        pokeName: this.pokeName,
        pokeImg: this.pokeImg,
        pokeSpecies: this.pokeSpecies,
        pokeStats: this.pokeStats
      };
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