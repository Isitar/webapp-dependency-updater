<template>
  <div class="field" :class="{'is-horizontal': horizontal}">
    <template v-if="horizontal">
      <slot name="label">
        <div v-if="label" class="field-label is-normal">
          <label class="label">
            <Icon v-if="hasLabelIconLeft" :icon="labelIconLeft"/>
            {{ label }}
          </label>
        </div>
      </slot>
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded" :class="{'has-icons-left':hasIconLeft, 'has-icons-right':hasIconRight}">
            <slot name="input" :value="{value}">
              <input class="input" :class="{'is-danger': hasError}" :value="value" @input="$emit('update:value', $event.target.value)">
              <Icon is-small is-left :icon="iconLeft" v-if="hasIconLeft" @click.native.stop="iconClick" :class="{'is-clickable': $listeners.iconClick}"/>
              <Icon is-small is-right :icon="iconRight" v-if="hasIconRight" @click.native.stop="iconClick" :class="{'is-clickable': $listeners.iconClick}"/>
            </slot>
          </p>
        </div>
      </div>
    </template>
    <template v-else>
      <slot name="label">
        <label class="label">
          <span class="icon-text" v-if="hasLabelIconLeft">
            <Icon :icon="labelIconLeft"/>
            <span> {{ label }}</span>
          </span>
          <span v-else>{{ label }}</span>
        </label>

      </slot>
      <div class="control" :class="{'has-icons-left':hasIconLeft, 'has-icons-right':hasIconRight}">
        <slot name="input">
          <input class="input" :class="{'is-danger': hasError}" :value="value" @input="$emit('update:value', $event.target.value)">
          <Icon is-small is-left :icon="iconLeft" v-if="hasIconLeft" @click.native.stop="iconClick" :class="{'is-clickable': $listeners.iconClick}"/>
          <Icon is-small is-right :icon="iconRight" v-if="hasIconRight" @click.native.stop="iconClick" :class="{'is-clickable': $listeners.iconClick}"/>
        </slot>
      </div>
    </template>
    <p class="help is-danger" v-if="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import Icon from "~/components/layout/Icon.vue";

@Component({
  components: {Icon}
})
export default class FieldBase extends Vue {
  // eslint-disable-next-line
  @Prop() value: any;
  @Prop() label!: string | null;
  @Prop({type: Boolean, default: false}) horizontal!: boolean;
  @Prop({type: Boolean, default: false}) hasError!: boolean;
  @Prop() error!: string | null;
  @Prop() iconLeft!: string | null;
  @Prop() iconRight!: string | null;
  @Prop() labelIconLeft!: string | null;


  @Emit('iconClick')
  public iconClick(event: Event): Event {
    return event;
  }

  protected get hasLabelIconLeft(): boolean {
    return null !== this.labelIconLeft && undefined !== this.labelIconLeft;
  }

  protected get hasIconLeft(): boolean {
    return null !== this.iconLeft && undefined !== this.iconLeft;
  }

  protected get hasIconRight(): boolean {
    return null !== this.iconRight && undefined !== this.iconRight;
  }

}
</script>
<style lang="scss" scoped>

</style>
