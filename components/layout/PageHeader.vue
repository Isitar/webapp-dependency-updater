<template>
  <section class="hero is-light">
    <div class="hero-body">
      <div class="container">
        <slot name="title">
          <p class="title">{{ title }}</p>
          <p v-if="subtitle !== null" class="subtitle">{{ subtitle }}</p>
        </slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class PageHeader extends Vue {
  @Prop({type: String, required: true})
  public title!: string;
  @Prop({default: null})
  public subtitle!: string | null;
}
</script>
<style lang="scss" scoped>

</style>
