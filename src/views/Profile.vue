<template>
  <Background
    class="bg-none w-screen px-32 pt-16 pb-48"
    :style="cssProps"
    bgSize="background-size: cover;"
  >
    <div class="flex justify-center font-bold" id="BG">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="w-auto">No.</th>
            <th class="w-auto">Name</th>
            <th class="w-auto">Type</th>
            <th class="w-auto">Stats</th>
            <th class="w-auto">Edit Name/Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="poke in pokemons"
            :key="poke.id"
            class="border-black border-2"
          >
            <td class="flex flex-col">
              <img :src="poke.pokeImg" :alt="poke.pokeName" />
            </td>
            <td class="border-black border-2">
              <div class="flex flex-row">
                <div class="px-3">{{ poke.pokeName }}</div>
              </div>
            </td>

            <td class="border-black border-2">
              <div>{{ poke.pokeSpecies.toString() }}</div>
            </td>
            <td class="border-black border-2">
              <ul class="text-left ml-2">
                <li>HP: {{ poke.pokeStats.hp }}</li>
                <li>Attack: {{ poke.pokeStats.attack }}</li>
                <li>Defense: {{ poke.pokeStats.defense }}</li>
                <li>special-attack: {{ poke.pokeStats["special-attack"] }}</li>
                <li>
                  special-defense: {{ poke.pokeStats["special-defense"] }}
                </li>
              </ul>
            </td>
            <td class="border-black border-2">
              <Button msg="Edit" v-show="!poke.isOn" @click="open(poke.pokeId)">
              </Button>
              <div v-show="poke.isOn" @keydown="putPoke(poke, newName, $event)">
                <Button
                  msg="Cancel"
                  v-show="poke.isOn"
                  @click="open(poke.pokeId)"
                >
                </Button>
                <input v-model="newName" type="text" name="pokeName" />
              </div>

              <Button
                msg="Delete"
                @click="
                  delPoke(poke.id);
                  fetchData();
                "
              >
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Background>
</template>
<script>
import Button from "@/components/Button.vue";
import Background from "@/components/Background.vue";
export default {
  components: {
    Button,
    Background,
  },
  data() {
    return {
      newName: "",
      pokemons: [],
      cssProps: {
        backgroundImage: `url(${require("@/assets/pokedexBG.jpg")})`,
      },
    };
  },
  mounted() {},
  async created() {
    await this.getPokeData();
    console.log(this.pokemons);
  },
  methods: {
    getPokeData() {
      this.axios
        .get(`http://localhost:3000/pokemon`)
        .then((response) => {
          for (let x = 0; x < response.data.length; x++) {
            const poke = {
              ...response.data[x],
              isOn: false,
              pokeId: this.pokemons.length,
            };
            this.pokemons.push(poke);
          }
        })
        .catch((err) => alert(err));
    },
    delPoke(payload) {
      this.axios
        .delete(`http://localhost:3000/pokemon/` + payload)
        .then((response) => console.log(response))
        .catch((err) => alert(err));
    },
    async fetchData() {
      const res = await fetch(`http://localhost:3000/pokemon/`);
      const datas = await res.json();
      window.location.reload();
      return datas;
    },
    open(id) {
      this.pokemons[id].isOn = !this.pokemons[id].isOn;
    },
    async putPoke(poke, value, event) {
      if (event.code === "Enter") {
        poke.isOn = false;
        poke.pokeName = value;
        console.log("newPokemons", poke);
        console.log("event", event);
        await this.axios.put("http://localhost:3000/pokemon/" + poke.id, poke);
      }
    },
  },
};
</script>

 
         