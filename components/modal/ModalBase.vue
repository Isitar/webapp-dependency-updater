<template>
  <div class="modal" :class="{'is-active': open}">
    <div class="modal-background"></div>
    <div :class="{'modal-card': isCard, 'modal-content': !isCard, 'modal-card-wide': isCard && isWide, 'modal-content-wide': !isCard && isWide}">
      <slot/>
    </div>
    <button v-if="showClose" class="modal-close is-large" aria-label="close" @click="close" type="button"></button>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';

@Component
export default class ModalBase extends Vue {
  @Prop({type: Boolean}) protected isCard!: boolean;
  @Prop({type: Boolean, default: true}) protected showClose!: boolean;
  @Prop({type: Boolean, default: false}) protected isWide!: boolean;
  @Prop() protected open!: boolean;

  @Emit('close')
  protected close(): void {
    return;
  }
}
</script>
<style lang="scss" scoped>

</style>
