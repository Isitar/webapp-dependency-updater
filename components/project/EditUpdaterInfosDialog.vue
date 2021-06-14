<template>
  <ModalForm :open="open" @close="close" :title="$t('editSubject', {subject: $t('project.updaterInformation')})" v-if="project" @save="e => updateProjectDetails()">
    <template v-slot:body>
      <form>
        <SimpleField :label="$t('project.targetBranch')" :label-icon-left="icons.targetBranch"
                     :value.sync="projectUpdate.targetBranch"
                     :has-error="projectUpdate.hasError('targetBranch')"
                     :error="projectUpdate.getError('targetBranch')"
        />
        <SimpleField :label="$t('project.updateFrequency')" :label-icon-left="icons.updateFrequency"
                     :value.sync="projectUpdate.updateFrequency"
                     :has-error="projectUpdate.hasError('updateFrequency')"
                     :error="projectUpdate.getError('updateFrequency')"
        />
        <Select :label="$t('project.projectType')" :label-icon-left="icons.projectType"
                multiple
                :value="selectedProjectTypes"
                @update:value="updateProjectTypeOnModel"
                :key-value-func="Number"
                :options="projectTypeOptions"
                :has-error="projectUpdate.hasError('projectType')"
                :error="projectUpdate.getError('projectType')"
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
import {bitToFormValue, enumToOptions, formValueToBit} from "~/constants/enumHelper";
import Icons from "~/constants/icons";

@Component({
  components: {Select, SimpleField, ModalForm}
})
export default class EditUpdaterInfosDialog extends Vue {
  @Prop({type: Object, required: true})
  public project!: ProjectDetailVm;

  @Watch('project', {immediate: true})
  onProjectChanged() {
    this.resetForm();
  }

  private projectUpdate: ProjectUpdate | null = null;
  private selectedProjectTypes: ProjectType[] = [];
  private icons = Icons;

  private updateProjectTypeOnModel(newVals: number[]) {
    this.selectedProjectTypes = newVals;
    if (null !== this.projectUpdate) {
      this.projectUpdate.projectType = formValueToBit(ProjectType, this.selectedProjectTypes);
    }
  }


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
    if (null !== this.projectUpdate.projectType) {
      this.selectedProjectTypes = bitToFormValue(ProjectType, this.projectUpdate.projectType);
    }
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

  private get projectTypeOptions(): { id: number, value: string }[] {
    return enumToOptions(ProjectType, (k, s) => this.$t(`projectType.${k}`).toString());
  }
}
</script>
<style lang="scss" scoped>

</style>
