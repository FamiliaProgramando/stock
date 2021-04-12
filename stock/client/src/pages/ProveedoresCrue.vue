<template>
    <div>Proveedores</div>
    <ul>
        <li v-for="proveedor in proveedores" :key="proveedor.id">
            {{ proveedor.name }}
        </li>
    </ul>
</template>

<script>

export default ({
    data() {
        return{

        }
    },
    computed: {
        proveedores() {
            return this.$store.getters['proveedores/proveedores']
        }
    }
})
</script>
