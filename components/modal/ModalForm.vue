<template>
  <ModalCard :open="open" @close="e => close()" :title="title" :is-wide="isWide">
    <template v-slot:body>
      <slot name="body"/>
    </template>
    <template v-slot:foot>
      <button type="button" class="button is-success" @click="e => save()">
        {{$t('formActions.save')}}
      </button>
      <button type="button" class="button is-danger" @click="e => close()">
        {{$t('formActions.cancel')}}
      </button>
    </template>
  </ModalCard>
</template>

<script lang="ts">
  import {Component, Emit} from 'vue-property-decorator';
  import ModalCard from "@/components/modal/ModalCard.vue";

  @Component({
    components: {ModalCard}
  })
  export default class ModalForm extends ModalCard {
    @Emit('save')
    public save() {
      return;
    }
  }
</script>
<style lang="scss" scoped>

</style>
