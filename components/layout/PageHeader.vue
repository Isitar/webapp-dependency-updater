<template>
  <section class="hero">
    <div class="hero-body">
      <p class="title">{{ title }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class PageHeader extends Vue {
  @Prop({type: String, required: true})
  public title!: string;
}
</script>
<style lang="scss" scoped>

</style>
