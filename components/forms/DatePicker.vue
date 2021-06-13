<template>
  <div class="field">
    <div>
      <FieldBase :value="value ? $d(new Date(this.value.split(' ')[0])) : null"
                 :label="label" :horizontal="horizontal" :has-error="hasError" :error="error"
                 @click.native="openModal" :icon-right="icons.cancel" :has-icon-right="value !== null"
                 @iconClick="clearValue()"
      />
    </div>
    <ModalForm :title="label" @close="modalOpen = false" @save="updateValue" :open="modalOpen">
      <template v-slot:body>
        <form>
          <div class="columns is-multiline">
            <div class="column is-4">
              <SimpleField :value.sync="day" :label="$t('datepicker.day')" @keyup.enter="updateValue"/>
            </div>
            <div class="column is-4">
              <FieldBase :label="$t('datepicker.month')">
                <template v-slot:input>
                  <div class="select is-fullwidth">
                    <select v-model="month">
                      <option value=""></option>
                      <option v-for="i in 12" :key="`month-${i}`" :value="i">{{ $d(Date.parse(`1990-${i}-1`), 'month') }}</option>
                    </select>
                  </div>
                </template>
              </FieldBase>

            </div>
            <div class="column is-4">
              <SimpleField :value.sync="year" :label="$t('datepicker.year')" @keypress.enter="updateValue"/>
            </div>
          </div>
        </form>
      </template>
    </ModalForm>
  </div>
</template>

<script lang="ts">
import {Component, Emit} from 'vue-property-decorator';
import FieldBase from "@/components/forms/FieldBase.vue";
import ModalForm from "@/components/modal/ModalForm.vue";
import SimpleField from "@/components/forms/SimpleField.vue";
import Icons from "~/constants/icons";

@Component({
  components: {SimpleField, ModalForm, FieldBase}
})
export default class DatePicker extends FieldBase {
  private modalOpen = false;

  private day: number | null = null;
  private month: number | null = null;
  private year: number | null = null;

  private icons = Icons;

  private openModal() {
    // parse date
    const split = this.value?.split('-');
    if (null !== split) {
      try {
        this.year = parseInt(split[0]);
        this.month = parseInt(split[1]);
        this.day = parseInt(split[2].split(' ')[0]);
      } catch (e) {

      }
    }

    this.modalOpen = true
  }

  private clearValue() {
    this.day = null;
    this.month = null;
    this.year = null;
    this.updateValue();
  }

  @Emit('update:value')
  public updateValue(): string | null {
    if (null === this.day
      || null === this.month
      || null === this.year) {
      return null;
    }
    this.modalOpen = false;
    return `${this.year}-${this.month}-${this.day} 00:00:00.`;
  }

}
</script>
<style lang="scss" scoped>

</style>
