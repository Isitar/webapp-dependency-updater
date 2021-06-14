<template>
  <FieldBase :label="label" :has-error="hasError" :error="error" :has-icon-left="hasIconLeft" :has-icon-right="hasIconRight" :horizontal="horizontal" :icon-left="iconLeft" :icon-right="iconRight" v-if="options">
    <template v-slot:input="inputVal">
      <div class="select is-fullwidth" :class="{'is-multiple': multiple}">
        <select v-model="valueInternal" :multiple="multiple" @input="updateValue" v-if="options">
          <option v-for="opt in options" :key="opt.id" :value="opt.id">{{ opt.value }}</option>
        </select>
      </div>
    </template>
  </FieldBase>
</template>

<script lang="ts">
import {Component, Emit, Prop} from 'vue-property-decorator';
import FieldBase from "~/components/forms/FieldBase.vue";
import {Watch} from "nuxt-property-decorator";

@Component({
  components: {FieldBase}
})
export default class Select extends FieldBase {
  @Prop({required: true})
  public options!: { id: string | number, value: string }[];

  @Prop({type: Boolean, default: false})
  public multiple!: boolean;

  private valueInternal;

  @Watch('value', {immediate: true})
  private onValueChangeD() {
    this.valueInternal = this.value;
  }

  @Prop({default: (s: string) => s})
  public keyValueFunc!: (s: string) => any;

  @Emit('update:value')
  public updateValue(event: Event): number[] | string[] {
    if (this.multiple) {
      return Array.from(event.target.selectedOptions, opts => this.keyValueFunc(opts.value));
    }
    return this.keyValueFunc(event.target.value);
  }

}
</script>
<style lang="scss" scoped>

</style>
