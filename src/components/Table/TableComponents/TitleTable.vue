<script setup>
import ButtonClose from "./ButtonClose.vue"
import ButtonEdit from "./ButtonEdit.vue"
import { IconUserCircle } from "@iconify-prerendered/vue-fa-regular"
</script>

<template>
    <header class="h-auto flex flex-row flex-wrap justify-between w-full bg-whiteLite phone-sm:max-xl:p-2 xl:p-3 px-12">
        <div class="flex flex-row gap-2 phone-sm:max-phone:w-full xl:w-1/2 my-2 phone-sm:max-md:justify-center">
            <IconUserCircle class=" rounded-full text-blueCustom" style="font-size: 36px;" />
            <h3 class="my-auto font-bold text-xl text-gray-600">Nombre del cliente</h3>
        </div>
        <div class="flex flex-row gap-2 phone-sm:max-phone:w-full xl:w-1/2 phone-sm:max-md:justify-center md:justify-end my-2 ">
            <ButtonEdit />
            <ButtonClose />
        </div>
    </header>
</template>

<style scoped></style>