<template>
  <ModalBase is-card :open="open" @close="e => close()" :show-close="false" :is-wide="isWide">
    <div class="modal-card-head has-background-primary has-text-white">
      <h2 class="modal-card-title has-text-white" v-if="title">{{title}}</h2>
      <button type="button" class="delete" aria-label="close" @click="e => close()"></button>
    </div>
    <div class="modal-card-body">
      <slot name="body"/>
    </div>
    <div class="modal-card-foot" v-if="$slots.foot">
      <slot name="foot"/>
    </div>
  </ModalBase>
</template>

<script lang="ts">
  import {Component, Prop} from 'vue-property-decorator';
  import ModalBase from "@/components/modal/ModalBase.vue";

  @Component({
    components: {ModalBase}
  })
  export default class ModalCard extends ModalBase {
    @Prop() protected title!: string;
    @Prop({type: Boolean, default: true}) protected isCard!: boolean;
  }
</script>
<style lang="scss" scoped>
 .modal-card-foot {
   justify-content: center;
 }
</style>
