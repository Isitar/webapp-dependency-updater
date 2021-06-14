<template>
  <div>
    <PageHeader :title="$t('platform.plural')"/>
    <section class="section">
      <div class="container has-text-centered">
        <button class="button is-medium" @click="createPlatformDialogOpen = true">{{ $t('createSubject', {subject: $t('platform.singular')}) }}</button>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="table-container">
          <table class="table is-fullwidth is-hoverable">
            <thead>
            <tr>
              <th>{{ $t('platform.name') }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="platform in platforms" :key="platform.id" class="is-clickable" @click="openPlatformDetail(platform.id)">
              <td>{{ platform.name }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <CreatePlatformDialog :open="createPlatformDialogOpen" @close="createPlatformDialogOpen = false" @save="() => { createPlatformDialogOpen = false; $fetch()}"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import PageHeader from "~/components/layout/PageHeader.vue";
import {PlatformListVm} from "~/services/IPlatformService";
import CreatePlatformDialog from "~/components/platform/CreatePlatformDialog.vue";

@Component({
  components: {CreatePlatformDialog, PageHeader}
})
export default class Platforms extends Vue {
  private platforms: PlatformListVm[] = [];
  private createPlatformDialogOpen = false;

  private openPlatformDetail(id: number): void {
    this.$router.push({path: this.localePath(`/platforms/${id}`)})
  }

  public async fetch() {
    this.platforms = await this.$platformService.platforms();
  }

}
</script>

