<script >
export default {
  props: ['closePopUp'],
  data() {
    return {
      form: {
        personOn: '',
        type: '',
        calle: '',
        numero: '',
        sector: '',
        state: '',
        provincia: '',
        client_name: ''
      },
      inputForm: "p-1 text-sm phone-sm:max-xl:col-span-2  w-full shadow-sm bg-gray-200 border-gray-200 border-2 rounded-sm"
    }
  },
  methods: {
    async CreateNewDom() {
      await fetch('http://localhost:3000/domicilios', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ personOn: this.form.personOn, calle: this.form.calle, type: this.form.type, sector: this.form.sector, provincia: this.form.provincia, numero: this.form.numero, state: this.form.state, client_name: this.form.client_name })
      }).catch(error => console.log(error))
      this.closePopUp()
    }
  }
}
</script>

<template>
  <div class="bg-black/25 h-screen w-screen fixed z-50">
    <div class="flex flex-row flex-wrap bg-white shadow mx-auto my-[5%] w-[40%] phone-sm:max-xl:w-[90%] ">
      <div class="flex flex-row  w-full justify-between p-4">
        <h1>Crea un nuevo Domicilio</h1>
        <button @click="closePopUp()">X</button>
      </div>
      <form class="grid grid-cols-2 p-4 gap-4 w-full">
        <input id="nombre" type="text" placeholder="Nombre" v-model="form.client_name" :class="inputForm">
        <input type="number" placeholder="Persona No" v-model="form.personOn" :class="inputForm">
        <input type="text" placeholder="Tipo de domicilio" v-model="form.type" :class="inputForm">
        <input type="text" placeholder="Numero" v-model="form.numero" :class="inputForm">
        <hr class="col-span-2">
        <input type="text" placeholder="Calle" v-model="form.calle" :class="inputForm">
        <input type="text" placeholder="Sector" v-model="form.sector" :class="inputForm">
        <input type="text" placeholder="Provincia" v-model="form.provincia" :class="inputForm">
        <input type="text" placeholder="Estado" v-model="form.state" :class="inputForm">
      </form>
      <div class="p-4 w-full">
        <button @click="CreateNewDom()"
          class="p-4 bg-blueCustom text-white w-full hover:bg-blue-800 tracking-wider ease-in-out duration-150">Crear nuevo
          Domicilio</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
