<template>
      <span class="tag" :class="{'is-danger': isOutdated, 'is-success': !isOutdated}">
        {{ isOutdated ? $t('project.outdated') : $t('project.upToDate') }}
      </span>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class ProjectStateTag extends Vue {
  @Prop({type: Boolean, required: true})
  public isOutdated!: boolean;
}
</script>
<style lang="scss" scoped>

</style>
