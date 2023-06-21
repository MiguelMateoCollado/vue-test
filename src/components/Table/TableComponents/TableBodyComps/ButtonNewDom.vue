<script >
export default {
    props: ['openPopUp']
}
</script>
<template>
    <div class="flex flex-row justify-end phone-sm:max-xl:w-full xl:w-1/2  my-2">
        <button @click="openPopUp()" class="bg-blueCustom phone-sm:max-xl:w-full  p-2 rounded-md text-white">
            + Nuevo Domicilio
        </button>
    </div>
</template>
<style scoped></style> 