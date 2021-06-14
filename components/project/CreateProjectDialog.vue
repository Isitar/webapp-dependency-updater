<template>
  <ModalForm :open="open" @close="close" :title="$t('editSubject', {subject: $t('project.details')})" @save="e => saveProject()">
    <template v-slot:body>
      <form v-if="projectCreate">
        <SimpleField :label="$t('project.name')" :label-icon-left="icons.xname"
                     :value.sync="projectCreate.name"
                     :has-error="projectCreate.hasError('name')"
                     :error="projectCreate.getError('name')"
        />

        <Select :label="$t('project.platformId')" :label-icon-left="icons.projectType"
                :value.sync="projectCreate.platformId"
                :key-value-func="e => e"
                :options="platformOptions"
                :has-error="projectCreate.hasError('platformId')"
                :error="projectCreate.getError('platformId')"
        />
        <Select :label="$t('project.projectType')" :label-icon-left="icons.projectType"
                multiple
                :value="selectedProjectTypes"
                @update:value="updateProjectTypeOnModel"
                :key-value-func="Number"
                :options="projectTypeOptions"
                :has-error="projectCreate.hasError('projectType')"
                :error="projectCreate.getError('projectType')"
        />
      </form>
    </template>
  </ModalForm>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import ModalForm from "~/components/modal/ModalForm.vue";
import {ProjectCreate, ProjectType} from "~/services/IProjectService";
import SimpleField from "~/components/forms/SimpleField.vue";
import ValidationError from "~/services/errors/ValidationError";
import Select from "~/components/forms/Select.vue";
import Icons from "~/constants/icons";
import CreateResponse from "~/services/CreateResponse";
import {enumToOptions, formValueToBit} from "~/constants/enumHelper";
import {PlatformListVm} from "~/services/IPlatformService";

@Component({
  components: {Select, SimpleField, ModalForm}
})
export default class CreateProjectDialog extends Vue {

  private projectCreate: ProjectCreate = new ProjectCreate();
  private selectedProjectTypes: ProjectType[] = [];
  private platforms: PlatformListVm[] = [];
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

  private updateProjectTypeOnModel(newVals: number[]) {
    this.selectedProjectTypes = newVals;
    if (null !== this.projectCreate) {
      this.projectCreate.projectType = formValueToBit(ProjectType, this.selectedProjectTypes);
    }
  }

  private resetForm() {
    this.projectCreate = new ProjectCreate();
  }

  private saveProject() {
    if (null === this.projectCreate) {
      return;
    }
    this.$projectService.createProject(this.projectCreate)
      .then(res => this.save(res))
      .catch((validError: ValidationError) => {
        if (null === this.projectCreate) {
          return;
        }
        this.projectCreate.errors = validError.errors
      });
  }


  private get platformOptions(): { id: string, value: string }[] {
    return this.platforms.map(platform => {
      return {id: platform.id, value: platform.name};
    });
  }


  private get projectTypeOptions(): { id: number, value: string }[] {
    return enumToOptions(ProjectType, (k, s) => this.$t(`projectType.${k}`).toString());
  }

  public async fetch() {
    this.platforms = await this.$platformService.platforms();
  }

}
</script>
<style lang="scss" scoped>

</style>
