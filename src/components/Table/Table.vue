<script >
import SubTitleTable from './TableComponents/SubTitleTable.vue';
import TitleTable from './TableComponents/TitleTable.vue';
import InputSearch from "./TableComponents/TableBodyComps/InputSearch.vue"
import ButtonNewDom from './TableComponents/TableBodyComps/ButtonNewDom.vue';
import TableHead from "./TableComponents/TableBodyComps/TableHead.vue"
import TableBody from './TableComponents/TableBodyComps/TableBody.vue';
import Pagination from './Pagination/Pagination.vue';
import CreateNewDom from './NewDomPopUp/CreateNewDom.vue';

import { IconMapPin } from '@iconify-prerendered/vue-heroicons'
import { ref } from 'vue';
export default {
  name: 'Table',
  components: { InputSearch, ButtonNewDom, TableBody, TableHead, SubTitleTable, TitleTable, CreateNewDom, Pagination, IconMapPin },
  data() {
    return {
      search: "",
      domicilios: [],
      domPerPage: 10,
      elementPerPage: [],
      actualPage: 1,
      searchResult: [],
      searchElementsPerPage: []
    }
  },
  setup() {
    const newDomTriggers = ref(false)
    const ToogleNewDom = () => {
      newDomTriggers.value = !newDomTriggers.value
    }
    return {
      newDomTriggers, ToogleNewDom
    }
  },
  mounted() {
    fetch('http://localhost:3000/Domicilios').then(res => res.json()).then(data => {
      this.domicilios = data
      this.getDataPagina(1)
    }).catch(err => console.log(err))
  },
  methods: {
    totalPages() {
      if (this.search.length !== 0) {
        return Math.ceil(this.searchResult.length / this.domPerPage)
      }
      return Math.ceil(this.domicilios.length / this.domPerPage)
    },
    getDataPagina(noPagina) {
      this.actualPage = noPagina
      this.elementPerPage = [];
      let ini = (noPagina * this.domPerPage) - this.domPerPage
      let fin = (noPagina * this.domPerPage)
      if (this.search.length !== 0) {
        this.searchElementsPerPage = this.searchResult.slice(ini, fin)
      }
      this.elementPerPage = this.domicilios.slice(ini, fin)
    },
    getPreviousPage() {
      if (this.actualPage > 1) {
        this.actualPage--
      }
      this.getDataPagina(this.actualPage)
    },
    getNextPage() {
      if (this.actualPage < this.totalPages()) {
        this.actualPage++
      }
      this.getDataPagina(this.actualPage)
    },
    isActive(noPagina) {
      if (noPagina == this.actualPage) {
        return "bg-blueCustom text-slate-100"
      } else {
        return ''
      }
    },
    SearchByName(name) {
      this.search = name
      this.searchResult = this.domicilios.filter((dom) =>
        dom.client_name.toLowerCase().includes(name.toLowerCase())
      )
      this.searchElementsPerPage = this.searchResult
    }
  },

}
</script>

<template>
  <CreateNewDom v-if="newDomTriggers" :closePopUp="ToogleNewDom" />
  <div class="shadow-md w-[90%]  absolute mx-[5%] flex flex-row flex-wrap my-[1%] mb-[5%]">
    <!--Table top-->
    <TitleTable />
    <SubTitleTable />
    <!--Table top-->
    <!--searchbar & create-->
    <div class="flex flex-row flex-wrap justify-between w-full phone-sm:max-xl:p-4  px-12">
      <InputSearch :SearchByName="SearchByName" :search="search" />
      <ButtonNewDom :openPopUp="ToogleNewDom" />
    </div>
    <!--searchbar & create-->
    <!--table desktop-->
    <div class="overflow-auto w-[98%] mx-auto  my-10  shadow hidden md:block">
      <table class="w-full">
        <TableHead />
        <TableBody :datos="elementPerPage" :search="search" :searchData="searchElementsPerPage" />
      </table>
    </div>
    <!--table desktop-->
    <!--table mobile-->
    <div v-if="search.length !== 0" v-for="domicilio in searchElementsPerPage"
      class="grid grid-cols-1 gap-4 p-4 w-full md:hidden">
      <div class="bg-blueCustom p-4 space-y-4 text-white rounded-md shadow ">
        <div class="flex items-center space-x-2 text-sm  justify-between">
          <div>{{ domicilio.calle }}</div>
          <div>{{ domicilio.numero }}</div>
        </div>
        <div class="flex items-center space-x-2 text-sm ">
          <div>
            <IconMapPin style="font-size: 30px; margin-left: auto; margin-right: auto; color: white;" />
          </div>
          <div>{{ domicilio.personOn }}</div>
          <div>{{ domicilio.type }}</div>
        </div>
        <div class="flex items-center justify-between space-x-2 text-sm ">
          <div class="flex flex-row gap-2">
            <div>{{ domicilio.sector }}</div>
            <div>{{ domicilio.provincia }}</div>
            <div>{{ domicilio.state }}</div>
          </div>
          <div>{{ domicilio.client_name }}</div>
        </div>
      </div>
    </div>
    <div v-else v-for="domicilio in elementPerPage" class="grid grid-cols-1 gap-4 p-4 w-full md:hidden">
      <div class="bg-blueCustom p-4 space-y-4 text-white rounded-md shadow ">
        <div class="flex items-center space-x-2 text-sm  justify-between">
          <div>{{ domicilio.calle }}</div>
          <div>{{ domicilio.numero }}</div>
        </div>
        <div class="flex items-center space-x-2 text-sm ">
          <div>
            <IconMapPin style="font-size: 30px; margin-left: auto; margin-right: auto; color: white;" />
          </div>
          <div>{{ domicilio.personOn }}</div>
          <div>{{ domicilio.type }}</div>
        </div>
        <div class="flex items-center justify-between space-x-2 text-sm ">
          <div class="flex flex-row gap-2">
            <div>{{ domicilio.sector }}</div>
            <div>{{ domicilio.provincia }}</div>
            <div>{{ domicilio.state }}</div>
          </div>
          <div>{{ domicilio.client_name }}</div>
        </div>
      </div>
    </div>
    <!--table mobile-->
    <!--Pagination-->
    <Pagination :totalPages="totalPages()" :getDataPagina="getDataPagina" :isActive="isActive" :getNextPage="getNextPage"
      :getPreviousPage="getPreviousPage" :domicilios="domicilios" />
    <!--Pagination-->
  </div>
</template>

<style scoped></style>
