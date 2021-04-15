<template>
  <div class="Buddy">
    <h2>{{this.pokeName}}</h2>
    <img :src="pokeImg" id="pokemon">
      <img alt="doctor" id="doctor" class="absolute " src="../assets/doctor.png">
      <Button msg="Add profile" router="/Add"/>
      <button @click="submit">Add</button>
  </div>
</template>
<script>

import Button from '@/components/Button.vue'
export default {
  name: 'ButtonMsg',
  components: {
    Button
  },
  data(){
  return {
    pokeName: "",
    pokeImg: "", 
    ability: []
  }
},
created() {
let ranPoke = Math.floor(Math.random() * 1000);
    this.axios.get("https://pokeapi.co/api/v2/pokemon/"+ranPoke).then((response) => {
        this.pokeName = response.data.forms[0].name;
        this.pokeImg = response.data.sprites.front_default;
        console.log(response.data.forms[0].name);
        console.log(response.data.sprites.front_default);
    })   
},
methods:{
submit(){
 let pokemon = {pokeName: this.pokeName , pokeImg: this.pokeImg};
    console.log(pokemon);
      this.axios.post(`http://localhost:3000/pokemon`,pokemon).then(response =>{
     
      console.log(response);
    })
}
}

}

</script>
<style>
#doctor{
  width: 20rem;
  height: 30rem;
}
#pokemon{
  width: 15rem;
  height: 15rem;
}
</style>