<template>
   <span class="icon" :class="{ 'is-right': isRight, 'is-left': isLeft, 'is-small':isSmall, 'is-large': isLarge}">
    <fa-layers v-if="stack">
      <fa v-for="i in icon" :icon="i" :key="i"/>
    </fa-layers>
    <fa--layers v-else-if="stackText">
      <fa- v-for="i in icon" :icon="i" :key="i"/>
      <fa--layers-text :value="textValue"/>
    </fa--layers>
    <fa v-else :icon="icon"/>
  </span>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Icon extends Vue {
  @Prop({type: Boolean, default: false}) private stack!: boolean;
  @Prop({type: Boolean, default: false}) private stackText!: boolean;
  @Prop() private textValue!: string;
  @Prop() private icon!: string | string[];
  @Prop({type: Boolean, default: false}) private isRight!: boolean;
  @Prop({type: Boolean, default: false}) private isLeft!: boolean;
  @Prop({type: Boolean, default: false}) private isSmall!: boolean;
  @Prop({type: Boolean, default: false}) private isLarge!: boolean;
}
</script>
<style lang="scss" scoped>

</style>
