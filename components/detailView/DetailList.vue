<template>
  <div class="detail-list">
    <slot />
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class DetailList extends Vue {

    }
</script>
<style lang="scss" scoped>

</style>
