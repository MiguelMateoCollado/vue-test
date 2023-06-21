<script setup>
import { IconSearchLine } from '@iconify-prerendered/vue-clarity';
</script>

<script>
export default {
    data() {
        return {
            inputValue: ""
        }
    },
    name: 'InputSearch',
    props: ['domicilios', 'SearchByName', 'search'],
}
</script>
<template>
    <div class="flex flex-row gap-2 phone-sm:max-xl:w-full xl:w-1/2 my-2 ">
        <span class="my-auto hidden lg:block">Buscar:</span>
        <input type="text" v-on:input="SearchByName(inputValue)" v-model="inputValue"
            class="border-2 p-1 w-full md:max-xl:w-full xl:w-1/2 rounded-md placeholder:font-light placeholder:left-[120px] pl-8 placeholder:text-sm "
            placeholder="Escribe lo que deseas buscar..." />
        <button class="absolute lg:left-[85px] xl:left-[115px]  text-xs py-3 px-2">
            <IconSearchLine />
        </button>
    </div>
</template>
<style scoped></style> 