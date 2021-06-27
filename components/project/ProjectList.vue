<template>
  <table class="table is-fullwidth is-hoverable">
    <colgroup>
      <col width="auto"/>
      <col width="1"/>
    </colgroup>
    <thead>
    <tr>
      <th>{{ $t('project.name') }}</th>
      <th>
        <Select v-if="filter" :options="outdatedFilter" is-small
                :value.sync="filterInternal.isOutdated"
        />
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="project in projects" :key="project.id" class="is-clickable" @click="detailClicked(project)">
      <td>{{ project.name }}</td>
      <td>
        <ProjectStateTag :is-outdated="project.isOutdated" :is-updating="project.isChecking" :update-requested="project.checkRequested"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import {ProjectListFilter, ProjectListVm} from "~/services/IProjectService";
import ProjectStateTag from "~/components/project/ProjectStateTag.vue";
import Select, {SelectOption} from "~/components/forms/Select.vue";
import {Watch} from "nuxt-property-decorator";

@Component({
  components: {Select, ProjectStateTag}
})
export default class ProjectList extends Vue {
  @Prop({required: true})
  public projects!: ProjectListVm[];


  @Prop({type: Object, default: null})
  public filter!: ProjectListFilter | null;

  @Watch('filter', {immediate: true})
  public onFilterChange() {
    this.filterInternal = this.filter;
  }

  public filterInternal!: ProjectListFilter | null;

  @Watch('filterInternal', {deep: true})
  public onFilterInternalChange() {
    this.filterChanged();
  }

  private outdatedFilter: SelectOption[] = [
    new SelectOption(null, this.$t('noFilter').toString()),
    new SelectOption(true, this.$t('project.outdated').toString()),
    new SelectOption(false, this.$t('project.upToDate').toString()),
  ];

  @Emit('update:filter')
  public filterChanged(): ProjectListFilter | null {
    return this.filterInternal;
  }

  @Emit('detailClicked')
  public detailClicked(project: ProjectListVm): ProjectListVm {
    return project;
  }


}
</script>
<style lang="scss" scoped>

</style>
