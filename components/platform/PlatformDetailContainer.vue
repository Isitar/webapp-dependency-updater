<template>
  <div v-if="platform">
    <PageHeader :title="platform.name"/>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <EditCard
              :title="$t('platform.details')"
              @edit="editDetailsOpen = true"
            >
              <DetailList>
                <DetailListItem :title="$t('platform.id')" :icon="icons.id" :description="platform.id"/>
                <DetailListItem :title="$t('platform.name')" :icon="icons.xname" :description="platform.name"/>
                <DetailListItem :title="$t('platform.platformType')" :icon="icons.platformType" :description="$t(`platformType.${platform.platformType}`)"/>
              </DetailList>
              <EditPlatformDetailsDialog :platform="platform" :open="editDetailsOpen" @close="editDetailsOpen = false" @save="() => {editDetailsOpen = false; $fetch()}"/>
            </EditCard>
          </div>
          <div class="column">
            <EditCard
              :title="$t('platform.git')"
              @edit="editGitOpen = true">
              <DetailList>
                <DetailListItem :title="$t('platform.gitUserName')" :icon="icons.gitUserName" :description="platform.gitUserName"/>
                <DetailListItem :title="$t('platform.gitUserEmail')" :icon="icons.gitUserEmail" :description="platform.gitUserEmail"/>
                <DetailListItem :title="$t('platform.privateKey')" :icon="icons.privateKey" :description="platform.privateKey"/>
              </DetailList>
              <EditPlatformGit :platform="platform" :open="editGitOpen" @close="editGitOpen = false" @save="() => {editGitOpen = false; $fetch()}"/>
            </EditCard>
          </div>
          <div class="column">
            <EditCard
              :title="$t('platform.auth')"
              @edit="editAuthOpen = true">
              <DetailList>
                <DetailListItem :title="$t('platform.apiBaseUrl')" :icon="icons.apiBaseUrl" :description="platform.apiBaseUrl"/>
                <DetailListItem :title="$t('platform.token')" :icon="icons.token" :description="platform.token"/>
              </DetailList>
              <EditPlatformAuthentication :platform="platform" :open="editAuthOpen" @close="editAuthOpen = false" @save="() => {editAuthOpen = false; $fetch()}"/>
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
import {PlatformDetailVm} from "~/services/IPlatformService";
import Icon from "~/components/layout/Icon.vue";
import Icons from "~/constants/icons";
import EditCard from "~/components/card/EditCard.vue";
import IconList from "~/components/detailView/IconList.vue";
import IconListItem from "~/components/detailView/IconListItem.vue";
import DetailList from "~/components/detailView/DetailList.vue";
import DetailListItem from "~/components/detailView/DetailListItem.vue";
import EditPlatformDetailsDialog from "~/components/platform/EditPlatformDetailsDialog.vue";
import EditPlatformAuthentication from "~/components/platform/EditPlatformAuthentication.vue";
import EditPlatformGit from "~/components/platform/EditPlatformGit.vue";

@Component({
  components: {EditPlatformGit, EditPlatformAuthentication, EditPlatformDetailsDialog, DetailListItem, DetailList, IconListItem, IconList, EditCard, Icon, PageHeader}
})
export default class PlatformDetailContainer extends Vue {
  @Prop({type: String, required: true})
  public id!: string;

  private icons = Icons;
  private platform: PlatformDetailVm | null = null;

  private editDetailsOpen = false;
  private editAuthOpen = false;
  private editGitOpen = false;

  public async fetch() {
    this.platform = await this.$platformService.platformDetail(this.id);
  }
}
</script>
<style lang="scss" scoped>

</style>
