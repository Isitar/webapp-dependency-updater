<template>
  <div class="card" :class="{'is-loading': isLoading}">
    <div class="card-header">
      <slot name="header"/>
    </div>
    <div class="card-content">
      <div class="loader is-primary" v-if="isLoading" />
      <slot name="body" v-else/>
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class Card extends Vue {
    @Prop({type: Boolean, default: false}) isLoading!: boolean;
  }
</script>
<style lang="scss" scoped>
</style>
