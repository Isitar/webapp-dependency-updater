<template>
  <ModalForm :open="open" @close="close" :title="$t('editSubject', {subject: $t('project.repositoryInformation')})" v-if="project" @save="e => updateProjectDetails()">
    <template v-slot:body>
      <form>
        <SimpleField :label="$t('project.platformProjectId')"
                     :value.sync="projectUpdate.platformProjectId"
                     :has-error="projectUpdate.hasError('platformProjectId')"
                     :error="projectUpdate.getError('platformProjectId')"
        />
        <SimpleField :label="$t('project.url')"
                     :value.sync="projectUpdate.url"
                     :has-error="projectUpdate.hasError('url')"
                     :error="projectUpdate.getError('url')"
        />
      </form>
    </template>
  </ModalForm>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import ModalForm from "~/components/modal/ModalForm.vue";
import {ProjectDetailVm, ProjectType, ProjectUpdate} from "~/services/IProjectService";
import SimpleField from "~/components/forms/SimpleField.vue";
import {Watch} from "nuxt-property-decorator";
import ValidationError from "~/services/errors/ValidationError";
import Select from "~/components/forms/Select.vue";
import {enumToOptions} from "~/constants/enumHelper";

@Component({
  components: {Select, SimpleField, ModalForm}
})
export default class EditProjectRepoInfosDialog extends Vue {
  @Prop({type: Object, required: true})
  public project!: ProjectDetailVm;

  @Watch('project', {immediate: true})
  onProjectChanged() {
    this.resetForm();
  }

  private projectUpdate: ProjectUpdate | null = null;

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
    this.projectUpdate = ProjectUpdate.fromDetail(this.project);
  }

  private updateProjectDetails() {
    if (null === this.projectUpdate) {
      return;
    }
    this.$projectService.updateProject(this.project.id, this.projectUpdate)
      .then(() => this.save())
      .catch((validError: ValidationError) => {
        if (null === this.projectUpdate) {
          return;
        }
        this.projectUpdate.errors = validError.errors
      });
  }

}
</script>
<style lang="scss" scoped>

</style>
