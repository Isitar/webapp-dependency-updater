<template>
  <ModalForm :open="open" @close="close" :title="$t('platform.editDetails')" v-if="platform" @save="e => updatePlatformDetails()">
    <template v-slot:body>
      <form>
        <SimpleField :label="$t('platform.apiBaseUrl')"
                     :value.sync="platformUpdate.apiBaseUrl"
                     :has-error="platformUpdate.hasError('apiBaseUrl')"
                     :error="platformUpdate.getError('apiBaseUrl')"
        />
        <SimpleField is-multiline
                     :label="$t('platform.privateKey')"
                     :value.sync="platformUpdate.privateKey"
                     :has-error="platformUpdate.hasError('privateKey')"
                     :error="platformUpdate.getError('privateKey')"
        />
        <SimpleField :label="$t('platform.token')"
                     :value.sync="platformUpdate.token"
                     :has-error="platformUpdate.hasError('token')"
                     :error="platformUpdate.getError('token')"
        />

      </form>
    </template>
  </ModalForm>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import {Watch} from "nuxt-property-decorator";
import ValidationError from "../../services/errors/ValidationError";
import ModalForm from "../modal/ModalForm.vue";
import SimpleField from "../forms/SimpleField.vue";
import {PlatformDetailVm, PlatformUpdate} from "~/services/IPlatformService";

@Component({
  components: {SimpleField, ModalForm}
})
export default class extends Vue {
  @Prop({type: Object, required: true})
  public platform!: PlatformDetailVm;

  @Watch('platform', {immediate: true})
  onPlatformChanged() {
    this.resetForm();
  }

  private platformUpdate: PlatformUpdate | null = null;

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
}
</script>
<style lang="scss" scoped>

</style>
