<template>
    <FieldBase :value="value" @update:value="$emit('update:value', $event)" :label="label" :horizontal="horizontal" :has-error="hasError" :error="error"/>
</template>

<script lang="ts">
    import {Component} from 'vue-property-decorator';
    import FieldBase from "@/components/forms/FieldBase.vue";

    @Component({
        components: {FieldBase}
    })
    export default class SimpleField extends FieldBase {
    }
</script>
<style lang="scss" scoped>

</style>
