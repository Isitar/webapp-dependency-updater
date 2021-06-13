<template>
  <div class="icon-list">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class IconList extends Vue {

  }
</script>
<style lang="scss" scoped>

</style>
