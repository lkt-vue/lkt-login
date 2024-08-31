<script setup lang="ts">
const emits = defineEmits([]);

// Slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<{
    loginResource: string,
    singUpResource: string,
}>(), {
    loginResource: '',
    singUpResource: '',
});
</script>

<template>
<div class="lkt-grid-3">
    <div class="lkt-grid-1">social login</div>
    <div class="lkt-grid-1">app login</div>
    <div class="lkt-grid-1">register</div>
</div>
</template>

<style scoped>

</style>