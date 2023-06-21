<script setup>
import { IconMapPin } from '@iconify-prerendered/vue-heroicons'
</script>
<script >
export default {
    props: ['domicilios', 'datos', 'searchData', 'search']
}
</script>

<template>
    <tbody class="divide-y divide-gray-100">
        <tr v-if="search.length !== 0" v-for="domicilio in searchData"
            class="px-12 font-light  align-middle text-center tracking-wider text-sm">
            <td class="text-blueCustom whitespace-nowrap px-12 py-2">
                <IconMapPin style="font-size: 30px; margin-left: auto; margin-right: auto;" />
            </td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.client_name }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.personOn }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.type }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.calle }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.numero }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.sector }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.provincia }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.state }}</td>
        </tr>
        <tr v-else v-for="domicilio in datos" class="px-12 font-light  align-middle text-center tracking-wider text-sm">
            <td class="text-blueCustom whitespace-nowrap px-12 py-2">
                <IconMapPin style="font-size: 30px; margin-left: auto; margin-right: auto;" />
            </td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.client_name }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.personOn }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.type }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.calle }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.numero }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.sector }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.provincia }}</td>
            <td class="py-2 px-12 whitespace-nowrap">{{ domicilio.state }}</td>
        </tr>
    </tbody>
</template>
<style scoped></style> 