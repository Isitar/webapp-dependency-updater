<template>
  <div>
    <PageHeader :title="$t('platform.plural')"/>
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
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import PageHeader from "~/components/layout/PageHeader.vue";
import {PlatformListVm} from "~/services/IPlatformService";

@Component({
  components: {PageHeader}
})
export default class Platforms extends Vue {
  private platforms: PlatformListVm[] = [];

  private openPlatformDetail(id: number): void {
    this.$router.push({path: this.localePath(`/platforms/${id}`)})
  }

  public async fetch() {
    this.platforms = await this.$platformService.platforms();
  }

}
</script>

