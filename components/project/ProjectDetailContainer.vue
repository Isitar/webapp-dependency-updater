<template>
  <div v-if="project">
    <PageHeader :title="project.name"/>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <EditCard
              :title="$t('project.details')"
              @edit="editDetailsOpen = true"
            >
              <DetailList>
                <DetailListItem :title="$t('project.id')" :icon="icons.id" :description="project.id"/>
                <DetailListItem :title="$t('project.name')" :icon="icons.xname" :description="project.name"/>
                <DetailListItem :title="$t('platform.singular')" :icon="icons.platform">
                  <template v-slot:description>
                    <NuxtLink :to="localePath(`/platforms/${project.platformId}`)">{{ project.platformName }}</NuxtLink>
                  </template>
                </DetailListItem>
              </DetailList>
              <EditProjectDetailsDialog :project="project" :open="editDetailsOpen" @close="editDetailsOpen = false" @save="() => {editDetailsOpen = false; $fetch()}"/>
            </EditCard>
          </div>
          <div class="column">
            <EditCard
              :title="$t('project.repositoryInformation')"
              @edit="editRepoInfosOpen = true">
              <DetailListItem :title="$t('project.platformProjectId')" :icon="icons.id" :description="project.platformProjectId"/>
              <DetailListItem :title="$t('project.url')" :icon="icons.url" :description="project.url"/>
              <EditProjectRepoInfosDialog :project="project" :open="editRepoInfosOpen" @close="editRepoInfosOpen = false" @save="() => {editRepoInfosOpen = false; $fetch()}"/>
            </EditCard>
          </div>
          <div class="column">
            <EditCard
              :title="$t('project.updaterInformation')"
              @edit="editUpdaterInfosOpen = true">
              <DetailListItem :title="$t('project.targetBranch')" :icon="icons.targetBranch" :description="project.targetBranch"/>
              <DetailListItem :title="$t('project.updateFrequency')" :icon="icons.updateFrequency" :description="project.updateFrequency"/>
              <DetailListItem :title="$t('project.projectType')" :icon="icons.projectType" :description="projectTypeDescription"/>
              <EditUpdaterInfosDialog :project="project" :open="editUpdaterInfosOpen" @close="editUpdaterInfosOpen = false" @save="() => {editUpdaterInfosOpen = false; $fetch()}"/>
            </EditCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import PageHeader from "~/components/layout/PageHeader.vue";
import {ProjectDetailVm, ProjectType} from "~/services/IProjectService";
import Icon from "~/components/layout/Icon.vue";
import Icons from "~/constants/icons";
import EditCard from "~/components/card/EditCard.vue";
import IconList from "~/components/detailView/IconList.vue";
import IconListItem from "~/components/detailView/IconListItem.vue";
import DetailList from "~/components/detailView/DetailList.vue";
import DetailListItem from "~/components/detailView/DetailListItem.vue";
import EditProjectDetailsDialog from "~/components/project/EditProjectDetailsDialog.vue";
import EditProjectRepoInfosDialog from "~/components/project/EditProjectRepoInfosDialog.vue";
import EditUpdaterInfosDialog from "~/components/project/EditUpdaterInfosDialog.vue";
import {bitToFormValue} from "~/constants/enumHelper";

@Component({
  components: {EditUpdaterInfosDialog, EditProjectRepoInfosDialog, EditProjectDetailsDialog, DetailListItem, DetailList, IconListItem, IconList, EditCard, Icon, PageHeader}
})
export default class ProjectDetailContainer extends Vue {
  @Prop({type: String, required: true})
  public id!: string;

  private icons = Icons;
  private project: ProjectDetailVm | null = null;

  private editDetailsOpen = false;
  private editRepoInfosOpen = false;
  private editUpdaterInfosOpen = false;

  private get projectTypeDescription(): string {
    return bitToFormValue(ProjectType, this.project?.projectType).map(val => this.$t(`projectType.${val}`)).reduce((carry, item) => carry + ', ' + item);
  }

  public async fetch() {
    this.project = await this.$projectService.projectDetail(this.id);
  }
}
</script>
<style lang="scss" scoped>

</style>
