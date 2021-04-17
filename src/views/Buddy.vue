<template>
  <div class="flex justify-start">
    <div class="flex flex-col text-left">
      <span>Name: {{pokeName}}</span>
      <ul>
        <!-- <li :v-for=""></li> -->
      </ul>

    </div>

    <img :src="pokeImg" id="pokemon" />
    <!-- <img alt="doctor" id="doctor" class="" src="../assets/doctor.png" /> -->
  </div>
  <ButtonRouter msg="Add profile" router="/Add" @click="submit"></ButtonRouter>
  <Button msg="Reroll" @click="getPoke"></Button>

</template>
<script>
import ButtonRouter from "@/components/ButtonRouter.vue";
import Button from "@/components/Button.vue";

// import Text from "@/components/Text.vue";
export default {

  components: {
    ButtonRouter,
    Button
  },
  data() {
    return {
      
      pokeName: "",
      pokeImg: "",
      pokeSpecies: [],
      pokeStats: {},
      
    
    };
  },
  mounted(){
  this.getPoke();
  },
  created() {
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
        }).catch(err => alert(err));
    },
    getPoke(){

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
      
            }
          } else {
            this.pokeSpecies.push(response.data.egg_groups[0].name);
            
          }
        }).catch(err => alert(err));

        let arrStat = []
        for (let x = 0; x < 5; x++) {
        arrStat.push([response.data.stats[x].stat.name,response.data.stats[x].base_stat])
        }
         this.pokeStats = Object.fromEntries(arrStat)
           
    
      }).catch(err => alert(err));
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