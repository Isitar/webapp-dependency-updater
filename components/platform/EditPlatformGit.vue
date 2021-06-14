<template>
  <ModalForm :open="open" @close="close" :title="$t('editSubject', {subject: $t('platform.git')})" v-if="platform" @save="e => updatePlatformDetails()">
    <template v-slot:body>
      <form>
        <SimpleField :label="$t('platform.gitUserName')" :label-icon-left="icons.gitUserName"
                     :value.sync="platformUpdate.gitUserName"
                     :has-error="platformUpdate.hasError('gitUserName')"
                     :error="platformUpdate.getError('gitUserName')"
        />
        <SimpleField :label="$t('platform.gitUserEmail')" :label-icon-left="icons.gitUserEmail"
                     :value.sync="platformUpdate.gitUserEmail"
                     :has-error="platformUpdate.hasError('gitUserEmail')"
                     :error="platformUpdate.getError('gitUserEmail')"
        />
        <SimpleField :label="$t('platform.privateKey')" :label-icon-left="icons.privateKey"
                     is-multiline
                     :value.sync="platformUpdate.privateKey"
                     :has-error="platformUpdate.hasError('privateKey')"
                     :error="platformUpdate.getError('privateKey')"
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
import Icons from "~/constants/icons";

@Component({components: {SimpleField, ModalForm}})
export default class EditPlatformGit extends Vue {
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
}
</script>
<style lang="scss" scoped>

</style>
