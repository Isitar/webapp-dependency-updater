<template>
  <div v-if="platform">
    <PageHeader :title="platform.name"/>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">

            <div class="panel" :class="{'is-dark': this.$store.state.ui.darkMode, 'is-light': !this.$store.state.ui.darkMode}">
              <p class="panel-heading"> {{ $t('platform.details') }} </p>
              <div class="panel-block">
                <span class="panel-icon">
                  <Icon no-icon-class :icon="icons.id"/>
                </span> {{ platform.id }}
              </div>
              <div class="panel-block"> <span class="panel-icon">
                  <Icon no-icon-class :icon="icons.xname"/>
                </span>  {{ platform.name }}</div>
              <div class="panel-block"> <span class="panel-icon">
                  <Icon no-icon-class :icon="icons.platformType"/>
                </span>  {{ platform.platformType }}</div>
            </div>
          </div>
          <div class="column">
            <div class="panel" :class="{'is-dark': this.$store.state.ui.darkMode, 'is-light': !this.$store.state.ui.darkMode}">
              <p class="panel-heading"> {{ $t('platform.auth') }} </p>
              <div class="panel-block"> {{ platform.apiBaseUrl }}</div>
              <div class="panel-block"> {{ platform.privateKey }}</div>
              <div class="panel-block"> {{ platform.token }}</div>
            </div>
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

@Component({
  components: {Icon, PageHeader}
})
export default class PlatformDetailContainer extends Vue {
  @Prop({type: String, required: true})
  public id!: string;

  private icons = Icons;

  private platform: PlatformDetailVm | null = null;

  public async fetch() {
    this.platform = await this.$platformService.platformDetail(this.id);
  }
}
</script>
<style lang="scss" scoped>

</style>
