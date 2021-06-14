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
          <table class="table is-fullwidth is-hoverable">
            <colgroup>
              <col width="auto"/>
              <col width="1"/>
            </colgroup>
            <thead>
            <tr>
              <th>{{ $t('project.name') }}</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in projects" :key="project.id" class="is-clickable" @click="openProjectDetail(project.id)">
              <td>{{ project.name }}</td>
              <td>
                <ProjectStateTag :is-outdated="project.isOutdated"/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <CreateProjectDialog v-if="createProjectDialogOpen" :open="createProjectDialogOpen" @close="createProjectDialogOpen = false" @save="() => { createProjectDialogOpen = false; $fetch()}"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import PageHeader from "~/components/layout/PageHeader.vue";
import {ProjectListVm} from "~/services/IProjectService";
import ProjectStateTag from "~/components/project/ProjectStateTag.vue";
import CreateProjectDialog from "~/components/project/CreateProjectDialog.vue";

@Component({
  components: {CreateProjectDialog, ProjectStateTag, PageHeader}
})
export default class Projects extends Vue {
  private projects: ProjectListVm[] = [];
  private createProjectDialogOpen = false;

  private openProjectDetail(id: number): void {
    this.$router.push({path: this.localePath(`/projects/${id}`)})
  }

  public async fetch() {
    this.projects = await this.$projectService.projects();
  }

}
</script>

