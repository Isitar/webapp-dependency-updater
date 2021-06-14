<template>
  <ModalForm :open="open" @close="close" :title="$t('createSubject', {subject: $t('platform.singular')})" @save="e => createPlatform()">
    <template v-slot:body>
      <form>
        <SimpleField :label="$t('platform.name')" :label-icon-left="icons.xname"
                     :value.sync="platformCreate.name"
                     :has-error="platformCreate.hasError('name')"
                     :error="platformCreate.getError('name')"
        />
        <Select :label="$t('platform.platformType')" :label-icon-left="icons.platformType"
                :value.sync="platformCreate.platformType"
                :key-value-func="Number"
                :options="platformTypes"
                :has-error="platformCreate.hasError('platformType')"
                :error="platformCreate.getError('platformType')"
        />
      </form>
    </template>
  </ModalForm>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import SimpleField from "~/components/forms/SimpleField.vue";
import ModalForm from "~/components/modal/ModalForm.vue";
import {PlatformCreate, PlatformType} from "~/services/IPlatformService";
import Icons from "~/constants/icons";
import ValidationError from "~/services/errors/ValidationError";
import {enumToOptions} from "~/constants/enumHelper";
import CreateResponse from "~/services/CreateResponse";
import Select from "~/components/forms/Select.vue";

@Component({
  components: {Select, ModalForm, SimpleField}
})
export default class CreatePlatformDialog extends Vue {

  private platformCreate: PlatformCreate | null = new PlatformCreate();
  private icons = Icons;

  @Prop({type: Boolean, default: false})
  public open!: boolean;

  @Emit('close')
  public close(event: Event): Event {
    this.resetForm();
    return event;
  }

  @Emit('save')
  public save(resp: CreateResponse): CreateResponse {
    return resp;
  }

  private resetForm() {
    this.platformCreate = new PlatformCreate();
  }

  private createPlatform() {
    if (null === this.platformCreate) {
      return;
    }
    this.$platformService.createPlatform(this.platformCreate)
      .then(createResp => this.save(createResp))
      .catch((validError: ValidationError) => {
        if (null === this.platformCreate) {
          return;
        }
        this.platformCreate.errors = validError.errors
      });
  }

  private get platformTypes(): { id: number, value: string }[] {
    return enumToOptions(PlatformType, (k, s) => this.$t(`platformType.${k}`).toString());
  }
}
</script>
<style lang="scss" scoped>

</style>
