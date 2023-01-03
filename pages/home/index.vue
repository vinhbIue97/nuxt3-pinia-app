<template>
    <h1 v-for="(product, index) in productsStore.products" class="text-blue-500" :key="index">
        {{ product.name }} : {{  product.price }}
    </h1>
    <button class="bg-blue-500" @click="handleClick">Add new</button>
</template>

<script lang="ts">
import { useProductsStore } from '~~/store/ProductsStore';
export default {
    setup() {
        const productsStore = useProductsStore();
        const handleClick = () => {
            productsStore.addNewProduct({})
        }
        return {
            productsStore,
            handleClick,
        }
    }
}


</script>

<style scope lang="scss">
</style>