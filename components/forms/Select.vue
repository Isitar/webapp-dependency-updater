<template>
  <FieldBase :label="label" :has-error="hasError" :error="error" :has-icon-left="hasIconLeft" :has-icon-right="hasIconRight" :horizontal="horizontal" :icon-left="iconLeft" :icon-right="iconRight" v-if="options">
    <template v-slot:input>
      <div class="select is-fullwidth">
        <select :value.sync="value">
          <option v-for="opt in options" :key="opt.id" :value="opt.id">{{ opt.value }}</option>
        </select>
      </div>
    </template>
  </FieldBase>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import FieldBase from "~/components/forms/FieldBase.vue";

@Component({
  components: {FieldBase}
})
export default class Select extends FieldBase {
  @Prop({required: true})
  public options!: { id, value };
}
</script>
<style lang="scss" scoped>

</style>
