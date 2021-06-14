<template>
  <div>
    <PageHeader :title="$t('project.plural')"/>
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
                <ProjectStateTag :is-outdated="project.isOutdated" />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import PageHeader from "~/components/layout/PageHeader.vue";
import {ProjectListVm} from "~/services/IProjectService";
import ProjectStateTag from "~/components/project/ProjectStateTag.vue";

@Component({
  components: {ProjectStateTag, PageHeader}
})
export default class Projects extends Vue {
  private projects: ProjectListVm[] = [];

  private openProjectDetail(id: number): void {
    this.$router.push({path: this.localePath(`/projects/${id}`)})
  }

  public async fetch() {
    this.projects = await this.$projectService.projects();
  }

}
</script>

