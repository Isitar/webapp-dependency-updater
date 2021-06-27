<template>
  <div>
    <PageHeader :title="$t('project.plural')"/>
    <section class="section">
      <div class="container has-text-centered">
        <button class="button is-medium" @click="createProjectDialogOpen = true">{{ $t('createSubject', {subject: $t('project.singular')}) }}</button>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="table-container">
          <ProjectList :projects="projects" @detailClicked="e => openProjectDetail(e.id)"
                       :filter.sync="projectListFilter"
          />
        </div>
      </div>
    </section>
    <CreateProjectDialog v-if="createProjectDialogOpen" :open="createProjectDialogOpen" @close="createProjectDialogOpen = false" @save="() => { createProjectDialogOpen = false; $fetch()}"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'nuxt-property-decorator';
import PageHeader from "~/components/layout/PageHeader.vue";
import {ProjectListFilter, ProjectListVm} from "~/services/IProjectService";
import ProjectStateTag from "~/components/project/ProjectStateTag.vue";
import CreateProjectDialog from "~/components/project/CreateProjectDialog.vue";
import ProjectList from "~/components/project/ProjectList.vue";

@Component({
  components: {ProjectList, CreateProjectDialog, ProjectStateTag, PageHeader}
})
export default class Projects extends Vue {
  private projects: ProjectListVm[] = [];
  private createProjectDialogOpen = false;


  private openProjectDetail(id: number): void {
    this.$router.push({path: this.localePath(`/projects/${id}`)})
  }


  private projectListFilter = new ProjectListFilter();

  @Watch('projectListFilter', {deep: true})
  private async onProjectListFilterChange() {
    this.loadData();
  }

  private async loadData() {
    this.projects = await this.$projectService.projects(this.projectListFilter);
    console.log(JSON.stringify(this.projects));
  }

  public async fetch() {
    this.loadData();
  }

}
</script>

