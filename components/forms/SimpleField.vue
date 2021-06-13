<template>
  <FieldBase :value="value" @update:value="$emit('update:value', $event)" :label="label" :horizontal="horizontal" :has-error="hasError" :error="error">
    <template v-if="isMultiline" v-slot:input>
      <textarea class="textarea" :class="{'is-danger': hasError}" :value="value" @input="$emit('update:value', $event.target.value)"></textarea>
      <Icon is-small is-left :icon="iconLeft" v-if="hasIconLeft" @click.native.stop="iconClick" :class="{'is-clickable': $listeners.iconClick}"/>
      <Icon is-small is-right :icon="iconRight" v-if="hasIconRight" @click.native.stop="iconClick" :class="{'is-clickable': $listeners.iconClick}"/>
    </template>
  </FieldBase>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import FieldBase from "@/components/forms/FieldBase.vue";

@Component({
  components: {FieldBase}
})
export default class SimpleField extends FieldBase {
  @Prop({type: Boolean, default: false})
  public isMultiline!: boolean;
}
</script>
<style lang="scss" scoped>

</style>
