<template>
  <div class="is-inline-block">
    <span v-if="isUpdating" class="tag is-info">
        {{ $t('project.updating') }}
      </span>
    <span v-if="updateRequested && !isUpdating" class="tag is-warning">
        {{ $t('project.updateRequested') }}
      </span>
    <span class="tag" :class="{'is-danger': isOutdated, 'is-success': !isOutdated}">
        {{ isOutdated ? $t('project.outdated') : $t('project.upToDate') }}
      </span>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class ProjectStateTag extends Vue {
  @Prop({type: Boolean, required: true})
  public isOutdated!: boolean;
  @Prop({type: Boolean, required: true})
  public updateRequested!: boolean;
  @Prop({type: Boolean, required: true})
  public isUpdating!: boolean;
}
</script>
<style lang="scss" scoped>

</style>
