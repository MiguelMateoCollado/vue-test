<script>
import { IconAngleDown } from '@iconify-prerendered/vue-pepicons';
export default {
    components: { IconAngleDown },
    data() {
        return {
            thead: ['...', "cliente", 'Persona NO.', 'Tipo de domicilio', 'Calle', 'Numero', 'Sector', 'Provincia', 'Estado']
        }
    }
}
</script>

<template>
    <thead>
        <tr class="px-12 text-white  font-light tracking-wider">
            <th class="bg-blueCustom p-3  whitespace-nowrap " v-for="th in thead">
                <span class="flex gap-2"> {{ th }}
                    <IconAngleDown class="my-auto" />
                </span>
            </th>
        </tr>
    </thead>
</template>
<style scoped></style> 