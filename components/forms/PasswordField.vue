<template>
  <FieldBase :value.sync="value" :label="label" :horizontal="horizontal" has-icon-right :error="error" :has-error="hasError">
    <template v-slot:input>
      <slot v-bind:default="showPassword">
        <input class="input"
               :class="{'is-danger': hasError}"
               :value="value"
               @input="$emit('update:value', $event.target.value)"
               :type="showPassword ? 'text' : 'password'"
        >
        <Icon is-small is-right :icon="showPassword ? icons.hidePassword : icons.showPassword" class="is-clickable has-text-primary" @click.native="toggleShowPassword"/>
      </slot>
    </template>
  </FieldBase>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import FieldBase from "@/components/forms/FieldBase.vue";
import Icon from "~/components/layout/Icon.vue";
import Icons from "~/constants/icons";

@Component({
  components: {Icon, FieldBase}
})
export default class PasswordField extends FieldBase {
  private showPassword = false;
  private icons = Icons;

  private toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
</script>
<style lang="scss" scoped>

</style>
