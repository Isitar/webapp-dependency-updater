<template>
  <ModalForm :open="open" @close="close" :title="$t('editSubject', {subject: $t('platform.details')})" v-if="platform" @save="e => updatePlatformDetails()">
    <template v-slot:body>
      <form>
        <SimpleField :label="$t('platform.name')" :label-icon-left="icons.xname"
                     :value.sync="platformUpdate.name"
                     :has-error="platformUpdate.hasError('name')"
                     :error="platformUpdate.getError('name')"
        />
        <Select :label="$t('platform.platformType')" :label-icon-left="icons.platformType"
                :value.sync="platformUpdate.platformType"
                :key-value-func="Number"
                :options="platformTypes"
                :has-error="platformUpdate.hasError('platformType')"
                :error="platformUpdate.getError('platformType')"
        />
      </form>
    </template>
  </ModalForm>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import ModalForm from "~/components/modal/ModalForm.vue";
import {PlatformDetailVm, PlatformType, PlatformUpdate} from "~/services/IPlatformService";
import SimpleField from "~/components/forms/SimpleField.vue";
import {Watch} from "nuxt-property-decorator";
import ValidationError from "~/services/errors/ValidationError";
import Select from "~/components/forms/Select.vue";
import {enumToOptions} from "~/constants/enumHelper";
import Icons from "~/constants/icons";

@Component({
  components: {Select, SimpleField, ModalForm}
})
export default class EditPlatformDetailsDialog extends Vue {
  @Prop({type: Object, required: true})
  public platform!: PlatformDetailVm;

  @Watch('platform', {immediate: true})
  onPlatformChanged() {
    this.resetForm();
  }

  private platformUpdate: PlatformUpdate | null = null;
  private icons = Icons;

  @Prop({type: Boolean, default: false})
  public open!: boolean;

  @Emit('close')
  public close(event: Event): Event {
    this.resetForm();
    return event;
  }

  @Emit('save')
  public save(): void {
    return;
  }

  private resetForm() {
    this.platformUpdate = PlatformUpdate.fromDetail(this.platform);
  }

  private updatePlatformDetails() {
    if (null === this.platformUpdate) {
      return;
    }
    this.$platformService.updatePlatform(this.platform.id, this.platformUpdate)
      .then(() => this.save())
      .catch((validError: ValidationError) => {
        if (null === this.platformUpdate) {
          return;
        }
        this.platformUpdate.errors = validError.errors
      });
  }

  private get platformTypes(): { id: number, value: string }[] {
    return enumToOptions(PlatformType, (k, s) => this.$t(`platformType.${k}`).toString());
  }

}
</script>
<style lang="scss" scoped>

</style>
