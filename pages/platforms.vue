<template>
  <div>
    <PageHeader :title="$t('platform.plural')"/>
    <ul>
      <li v-for="platform in platforms" :key="platform.id">{{ platform.name }}</li>
    </ul>
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

  public async fetch() {
    this.platforms = await this.$platformService.platforms(this.$api);
  }

}
</script>

