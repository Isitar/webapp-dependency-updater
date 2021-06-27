<template>
  <FieldBase :label="label" :has-error="hasError" :error="error" :has-icon-left="hasIconLeft" :has-icon-right="hasIconRight" :horizontal="horizontal" :icon-left="iconLeft" :icon-right="iconRight" :label-icon-left="labelIconLeft" v-if="options">
    <template v-slot:input="inputVal">
      <div class="select is-fullwidth" :class="{'is-multiple': multiple, 'is-small': isSmall}">
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
  public options!: SelectOption[];

  @Prop({type: Boolean, default: false})
  public multiple!: boolean;

  @Prop({type: Boolean, default: false})
  public isSmall!: boolean;

  private valueInternal: any;

  @Watch('value', {immediate: true})
  private onValueChangeD() {
    this.valueInternal = this.value;
  }

  @Prop({type: Function, default: (s: string) => s})
  public keyValueFunc!: (s: string) => any;

  @Emit('update:value')
  public updateValue(event: Event): any {
    const target = event?.target as HTMLSelectElement;
    if (this.multiple) {
      return Array.from(target.selectedOptions, (opts: HTMLOptionElement) => this.keyValueFunc(opts.value));
    }
    return this.keyValueFunc(target.value);
  }
}

export class SelectOption {
  public id: any;
  public value: string;

  constructor(id: any, value: string) {
    this.id = id;
    this.value = value;
  }
}
</script>
<style lang="scss" scoped>

</style>
