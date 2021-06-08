<template>
  <section class="hero" :class="{'is-dark': this.$store.state.ui.darkMode, 'is-light': !this.$store.state.ui.darkMode }">
    <div class="hero-body">
      <div class="container">
        <p class="title">{{ title }}</p>
        <p v-if="subtitle !== null" class="subtitle">{{ subtitle }}</p>
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
